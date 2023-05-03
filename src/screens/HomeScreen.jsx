import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, icons, SIZES, routes, images } from '../constants'
import { NavFavorites, NavOptions } from '../components'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setOrigin, setDestination } from '../redux/navSlice'


export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{
            zIndex: 50,
            height: 30,
            width: 30,
            padding: SIZES.padding * 3,
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center'

          }}>
          <Image source={icons.menu} resizeMode='contain' style={{ width: 20, height: 20, tintColor: COLORS.white }} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>


        <GooglePlacesAutocomplete

          placeholder='Where From?'
          textInputProps={{
            placeholderTextColor: COLORS.gray,
            returnKeyType: "search"
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          minLength={2}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description
              })
            );

            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
              color: COLORS.darkgray,
            },
            predefinedPlacesDescription: {
              color: 'black',
            },
            listView: {
              color: COLORS.black
            },
            row: {
              //backgroundColor: '#ccc',
              padding: 13,
              height: 44,
              flexDirection: 'row',
            },
            description: {
              color: COLORS.darkgray
            },
          }}
        />
        <NavOptions onPress={() => navigation.navigate(routes.MAP_SCREEN)} />
        <NavFavorites />
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  header: {
    flexDirection:'column',
    backgroundColor: COLORS.turquoise
  },

  
  container: {
    padding: SIZES.padding * 1,

  }
})