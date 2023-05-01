import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { images, SIZES, COLORS, icons, routes } from '../constants'

import { TWILIO_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } from '@env'






export const RegistrationScreen = ({ navigation }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };


    return (
        <View style={{ flexGrow: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
                onPress={() => (navigation.navigate(routes.START_SCREEN))}
                style={{
                    backgroundColor: COLORS.lightGray,
                    zIndex: 50,
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    padding: SIZES.padding * 1,
                    borderRadius: 20,
                    shadowColor: COLORS.black,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.9,
                    shadowRadius: 3.84
                }}>
                <Image source={icons.arrowLeft} resizeMode='contain' style={{ width: 15, height: 15, tintColor: COLORS.black }} />
            </TouchableOpacity>

            <Image source={images.signup} resizeMode='contain' style={{ width: 250, height: 200 }} />
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginVertical: 30 }}>
                <Text style={{ color: COLORS.black, fontSize: SIZES.h1, fontWeight: 700, marginBottom: 5 }}>Registration</Text>
                <Text style={{ color: COLORS.darkgray, fontSize: SIZES.body2, paddingHorizontal: SIZES.padding * 2, textAlign: 'center' }}>Add your phone number and you will receive a 4 digit OTP for verification.</Text>
            </View>
            <View style={{ width: '90%', margin: 10, backgroundColor: COLORS.white, padding: SIZES.padding * 2, borderRadius: 5 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: COLORS.lightGray,
                    borderColor: isFocused ? COLORS.turquoise : COLORS.gray,
                    borderWidth: 0.5,
                    marginBottom: 10
                }}>
                    <Image source={icons.kenya} resizeMode='contain' style={{ flex: 1, padding: SIZES.padding , width: 30, height: 30 }} />
                    <TextInput
                        style={{
                            flex: 2,
                            padding: SIZES.padding * 0.1,
                            color: COLORS.turquoise,
                            fontSize: 20,
                            borderRadius: 5,

                        }}
                        placeholderTextColor={COLORS.gray}
                        placeholder='Phone number'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        keyboardType='numeric'
                        value='+254'
                        editable={false}
                    />
                    <TextInput
                        style={{
                            flex: 8,
                            padding: SIZES.padding * 1.5,
                            color: COLORS.turquoise,
                            fontSize: 20,
                            borderRadius: 5,

                        }}
                        placeholderTextColor={COLORS.gray}
                        placeholder='Phone number'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        keyboardType='numeric'
                    />
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate(routes.OTP_SCREEN)}
                    style={{
                        //width: '85%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: SIZES.button_padding,
                        backgroundColor: COLORS.turquoise,
                        marginVertical: 20,
                    }}>
                    <Text style={{ fontSize: SIZES.body2 }}>Send OTP</Text>
                </TouchableOpacity>
            </View>




        </View>
    )
}

const styles = StyleSheet.create({})