import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, icons, SIZES, routes, images } from '../constants'
import { NavFavorites, NavOptions, RouteCard } from '../components'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch, useSelector } from 'react-redux'
import { setOrigin, setDestination } from '../redux/navSlice'
import { selectUser } from '../redux/userSlice';
import { ScrollView } from 'react-native-gesture-handler';


export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();


  useEffect(() => {

  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.inputBlue }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{
            zIndex: 50,
            height: 15,
            width: 15,
            borderRadius: 30,
            elevation: 1,
            padding: SIZES.padding * 2.5,
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white
          }}>
          <Image source={icons.menu} resizeMode='contain' style={{ width: 15, height: 15, tintColor: COLORS.black }} />
        </TouchableOpacity>

        <View>
          <Text style={{ fontWeight: 500, fontSize: 16 }}>Hey, Steve</Text>
        </View>

      </View>

      <View style={styles.container}>


        <GooglePlacesAutocomplete

          placeholder='Where From?'
          textInputProps={{
            placeholderTextColor: COLORS.darkgray,
            returnKeyType: "search",
            backgroundColor: COLORS.white
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
              color: COLORS.primary,
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
              color: COLORS.black
            },
          }}
        />

        <NavOptions onPress={() => navigation.navigate(routes.MAP_SCREEN)} />
        {/* <NavFavorites /> */}

        <ScrollView
        style={{paddingVertical: 15}}
        >
          <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <Text
            style={{fontSize:18, fontWeight:500}}
            >
              All Routes
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.ROUTES_SCREEN)}
            >
              <View >
                <Text style={{fontSize:15, color: COLORS.secondary }}>VIEW ALL</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{fontSize:15, color:COLORS.darkgray}}>
              Every available route
            </Text>
          </View>
          <RouteCard />
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.inputBlue,
    alignItems:'center'
  },


  container: {
    padding: SIZES.padding * 1,

  }
})