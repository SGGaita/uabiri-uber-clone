import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../redux/navSlice';
import { selectPickUp, selectDropOff } from '../redux/routesSlice';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { COLORS, images } from '../constants';
import { darkStyle } from '../data/mapTheme';

export const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)
    const [directionsAdded, setDirectionsAdded] = useState(false);
    const dispatch = useDispatch()

    const handleDirectionError = (error) => {
        if (error && error.message === 'ZERO_RESULTS') {
            // Display a message to the user indicating that no route was found
            console.log('No route found between the specified locations.');
        }
    };


    useEffect(() => {
        if (!origin || !destination || !directionsAdded) return;

        //zoom map and fit to the markers
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 40, right: 40, bottom: 40, left: 40 }
        })
    }, [origin, destination, directionsAdded])


    useEffect(() => {
        if (!origin || !destination) return;

        const getTravelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
            units=imperial&origins=${origin.description}&destinations=
            ${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
            ).then((res) => res.json())
                .then(data => {
                    dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
                })
        }

        getTravelTime();

    }, [origin, destination, GOOGLE_MAPS_APIKEY])



    return (
        <MapView
            ref={mapRef}
            style={{ flex: 1 }}
            mapType="standard"
            initialRegion={{
                latitude: origin?.location.lat,
                longitude: origin?.location.lng,
                latitudeDelta: 0.095,
                longitudeDelta: 0.095,
            }}

        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin?.description}
                    destination={destination?.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor={COLORS.primary}
                    identifier='directions'
                    onError={(errorMessage) => {
                        console.log('This error message', errorMessage)
                    }}
                    onReady={() => {
                        setDirectionsAdded(true);
                    }}
                />
            )}
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title='Pick up'
                    description={origin.description}
                    identifier='origin'
                    callout={{
                        // Make the callout always open
                        tooltip: true,
                      }}
                    
                >
                    <Image source={images.location} resizeMode='contain' style={{ width: 30, height: 30,  }} />
                   

                </Marker>
            )}

            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title='Drop off'
                    description={destination.description}
                    identifier='destination'
                    
                    >
                        
                    <Image source={images.destination} resizeMode='contain' style={{ width: 30, height: 30, }} />

                </Marker>
            )}
        </MapView>

    )
}



const styles = StyleSheet.create({})