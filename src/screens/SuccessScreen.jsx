import { StyleSheet, Text, View, Image, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { SIZES, images, routes } from '../constants'
import * as Animatable from "react-native-animatable"

export const SuccessScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routes.LOGIN_SCREEN)
    }, 4000)
  }, [])


  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animatable.Image source={require('../assets/images/success.gif')}
        animation="slideInUp"
        iterationCount={1}
        resizeMode='contain'
        style={{ width: 300, height: 300 }} />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={{ textAlign: 'center', fontSize: SIZES.h2, fontWeight: 200, paddingHorizontal: 20 }}
      >
        Successful Signup. you are being redirected to Login!
      </Animatable.Text>
      <ActivityIndicator style={{ marginTop: 36 }} size={60} color='grey' />
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({})