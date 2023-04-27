import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../redux/navSlice';

export const Map = () => {
    const origin = useSelector(selectOrigin)
    return (
        <MapView
            style={{ flex: 1 }}
            mapType="standard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}

        >
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
        </MapView>
    )
}



const styles = StyleSheet.create({})