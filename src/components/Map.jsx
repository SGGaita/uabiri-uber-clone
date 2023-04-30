import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../redux/navSlice';
import { GOOGLE_MAPS_APIKEY } from '@env'

export const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)
    const [directionsAdded, setDirectionsAdded] = useState(false);
    const dispatch = useDispatch()


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

                    console.log('Distance infor', data)
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
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.095,
                longitudeDelta: 0.095,
            }}

        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor='black'
                    identifier='directions'
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
                />
            )}

            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title='drop off'
                    description={destination.description}
                    identifier='destination'
                />
            )}
        </MapView>

    )
}



const styles = StyleSheet.create({})