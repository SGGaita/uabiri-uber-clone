import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { RideHistory } from '../components'
import { COLORS } from '../constants'



export const RideHistoryScreen = () => {
  return (
    <SafeAreaView style={{flexGrow:1,backgroundColor:COLORS.white}}>
      <RideHistory/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})