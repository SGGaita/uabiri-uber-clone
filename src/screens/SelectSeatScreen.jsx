import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../constants'
import Svg, { Circle } from 'react-native-svg';
import Layout from '../svg/Layout.svg'

export const SelectSeatScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flexGrow: 1 }}>
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal:10,
                    marginTop:15
                }}
            >
                <View style={{ flexDirection: 'column',paddingRight:10, alignItems:'center' }}>
                    <Image source={images.booked} resizeMode='contain' style={{ width: 30, height: 30 }} />
                    <Text>Booked</Text>
                </View>
                <View style={{ flexDirection: 'column',paddingRight:10,alignItems:'center' }}>
                    <Image source={images.available} resizeMode='contain' style={{ width: 30, height: 30 }} />
                    <Text>Available</Text>
                </View>
                <View style={{ flexDirection: 'column',paddingRight:10,alignItems:'center' }}>
                    <Image source={images.selected} resizeMode='contain' style={{ width: 30, height: 30 }} />
                    <Text>Selected</Text>
                </View>

            </View>

            <Layout height={650}/>

            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: COLORS.primary,
                    paddingVertical: SIZES.padding * 1.8,
                    width: '100%'
                }}
            >
                <Text
                    style={{ textAlign: 'center', color: COLORS.white, ...FONTS.h3 }}
                >Pay(Seats:)</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({})