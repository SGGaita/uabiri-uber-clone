import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native'
import React from 'react'
import {images,SIZES} from '../../constants'
import { NavOptions } from '../../components'
import routes from '../../constants/routes'


export const HomeScreen = ({navigation}) => {
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
        <NavOptions onPress={()=> navigation.navigate(routes.MAP_SCREEN)}/>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container:{
    padding: SIZES.padding * 1
  }
})