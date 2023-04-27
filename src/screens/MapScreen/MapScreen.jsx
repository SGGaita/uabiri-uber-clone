import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import { Map } from '../../components'

export const MapScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
                <Map />
            </View>
            <View style={{ flex: 1 }}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})