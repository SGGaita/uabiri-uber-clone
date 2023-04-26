import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { COLORS, images, SIZES } from '../../constants'
import { NavOptions } from '../../components'
import routes from '../../constants/routes'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Config from "react-native-config";
import { useDispatch } from 'react-redux'
import navSlice, { setOrigin, setDestination } from '../../redux/navSlice'


export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
          }}
          source={images.logo}
        />

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
            key: 'AIzaSyCvRUxccE0-X4MxmxnSF0xcAwvyhbCUJdM',
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
              color: COLORS.darknavy
            },
          }}
        />
        <NavOptions onPress={() => navigation.navigate(routes.MAP_SCREEN)} />
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding * 1
  }
})