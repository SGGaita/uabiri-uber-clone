import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import {routes} from '../constants'

export const StartScreen = ({ navigation }) => {
    return (
        <View style={{ flexGrow: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            <Image source={images.stage} resizeMode='contain' style={{ width: 250, height: 200 }} />
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginVertical: 30 }}>
                <Text style={{ color: COLORS.black, fontSize: SIZES.h1, fontWeight: 700, marginBottom: 5 }}>Let's get started</Text>
                <Text style={{ color: COLORS.darkgray, fontSize: SIZES.body2 }}>Never a better time now to start</Text>
            </View>


            <TouchableOpacity
            onPress={()=>navigation.navigate(routes.REGISTRATION_SCREEN)}
                style={{
                    width: '85%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: SIZES.button_padding,
                    backgroundColor: COLORS.turquoise,
                    marginVertical: 15,
                }}>
                <Text style={{ fontSize: SIZES.body2 }}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={()=>navigation.navigate(routes.LOGIN_SCREEN)}
                style={{
                    width: '85%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: SIZES.button_padding,
                    backgroundColor: COLORS.white,
                    elevation: 4, // add elevation to create shadow
                    shadowColor: COLORS.black // add shadow color
                }}>
                <Text style={{ fontSize: SIZES.body2, color: COLORS.black }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({})