import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native'
import React from 'react'
import {images,SIZES} from '../../constants'
import { NavOptions } from '../../components'


export const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
        style={{
          width:70,
          height:70,
          resizeMode:"contain",
        }}
        source={images.logo}
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container:{
    padding: SIZES.padding * 1
  }
})