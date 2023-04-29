import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, icons } from '../constants'
import routes from '../constants/routes'

export const RiderOptionsCard = ({navigation}) => {
  return (
    <SafeAreaView style={{ color: COLORS.white, flexGrow: 1 }}>
      <View>
        <TouchableOpacity
        onPress={()=> navigation.navigate(routes.NAVIGATION_CARD)}
        style={{
          position:'absolute',
          top:20,
          left:25,
          padding:SIZES.padding 
        }}
        >
          <Image source={icons.arrowLeft} resizeMode='contain' style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
        <Text style={{ color: COLORS.black, alignSelf: 'center', paddingVertical: SIZES.padding * 3, ...FONTS.h2 }}>Select a Ride</Text>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({})