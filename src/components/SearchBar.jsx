import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { SIZES,COLORS } from '../constants'

export const SearchBar = () => {
  return (
    <View
    style={styles.container}>
    <TextInput
            style={{
              flex: 8,
              padding: SIZES.padding * 1.5,
              color: COLORS.primary,
              fontSize: 15,
              borderRadius: 5,

            }}
            placeholderTextColor={COLORS.gray}
            placeholder='Search routes'
            
          />
    </View>
  )
}



const styles = StyleSheet.create({

    container: {
        padding: SIZES.padding * 1
    },

})