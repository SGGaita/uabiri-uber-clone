import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images, icons, routes } from '../constants'
import { COLORS } from '../constants'

const AvatarChange = ({ onPress }) => {
  return (
    <View style={{
      backgroundColor: COLORS.white, borderRadius: 60, height: 80, width: 80, alignSelf: 'center',
      //paddingBottom: SIZES.padding * 1.5,
      alignItems: 'center',
      justifyContent: 'space-around'
    }}>
      <Image source={images.avatar} resizeMode='contain' style={{ padding: 20, borderRadius: 60, height: 75, width: 75 }} />
      <TouchableOpacity
        onPress={onPress}
        style={{
          position: 'absolute',
          bottom: 5,
          right: -5,
          width: 30,
          height: 30,
          backgroundColor: COLORS.white,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30
        }}>
        <Image source={icons.camera} resizeMode='contain' style={{ tintColor: COLORS.primary, width: 20, height: 20 }} />
      </TouchableOpacity>

    </View>
  )
}

export default AvatarChange

const styles = StyleSheet.create({})