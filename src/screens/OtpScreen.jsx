import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons,images,routes } from '../constants'
import { OtpComponent } from '../components'


export const OtpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flexGrow: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={() => (navigation.navigate(routes.REGISTRATION_SCREEN))}
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

      <Image source={images.otp} resizeMode='contain' style={{ width: 250, height: 150 }} />
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginVertical: 30 }}>
                <Text style={{ color: COLORS.black, fontSize: SIZES.h1, fontWeight: 700, marginBottom: 5 }}>Verification</Text>
                <Text style={{ color: COLORS.darkgray, fontSize: SIZES.body2, paddingHorizontal: SIZES.padding * 2, textAlign: 'center' }}>Add you phone number and you will receive an OTP for verification.</Text>
            </View>
            <View style={{width:'90%',margin: 10, backgroundColor: COLORS.white, padding: SIZES.padding * 2, borderRadius: 5 }}>
                <OtpComponent/>

                <TouchableOpacity
                    onPress={() => navigation.navigate(routes.USER_REGISTRATION_SCREEN)}
                    style={{
                        //width: '85%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: SIZES.button_padding,
                        backgroundColor: COLORS.black,
                        marginVertical: 20,
                    }}>
                    <Text style={{ color:COLORS.white, fontSize: SIZES.body2 }}>Verify</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
            <Text style={{ color: COLORS.darkgray, fontSize: SIZES.body2, paddingHorizontal: SIZES.padding * 2, textAlign: 'center' }}>Did you receive any code?</Text>
                <Text style={{ color: COLORS.turquoise, fontSize: SIZES.h2, fontWeight: 700, marginVertical: 5 }}>Resend new code</Text>
                
            </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})