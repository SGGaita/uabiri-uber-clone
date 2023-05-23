import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../constants'
import Svg, { Circle } from 'react-native-svg';
import Layout14Seater from '../svg/Layout14Seater.svg';
import Layout33Seater from '../svg/Layout33Seater.svg';
import Layout49Seater from '../svg/Layout49Seater.svg';
import { selectType } from '../redux/vehicleTypeSlice';
import { useSelector } from 'react-redux';

export const SelectSeatScreen = ({ navigation }) => {
    const vehicleType = useSelector(selectType)

    useEffect(() => {
        console.log(vehicleType)
    }, [])

    const renderVehicleLayout = () => {
        switch (vehicleType) {
            case '14-seater':
                return <Layout14Seater height={650} />;
            case '33-seater':
                return <Layout33Seater height={650} />;
            case '49-seater':
                return <Layout49Seater height={650} />;
            default:
                return null;
        }
    };


    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flexGrow: 1 }}>
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    marginTop: 15
                }}
            >
                <View style={{ flexDirection: 'column', paddingRight: 10, alignItems: 'center' }}>
                    <Image source={images.available} resizeMode='contain' style={{ width: 30, height: 30 }} />
                    <Text>Available</Text>
                </View>
                <View style={{ flexDirection: 'column', paddingRight: 10, alignItems: 'center' }}>
                    <Image source={images.selected} resizeMode='contain' style={{ width: 30, height: 30 }} />
                    <Text>Selected</Text>
                </View>
                <View style={{ flexDirection: 'column', paddingRight: 10, alignItems: 'center' }}>
                    <Image source={images.booked} resizeMode='contain' style={{ width: 30, height: 30 }} />
                    <Text>Booked</Text>
                </View>

            </View>

            {renderVehicleLayout()}

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