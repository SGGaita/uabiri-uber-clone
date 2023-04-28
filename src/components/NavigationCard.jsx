import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../redux/navSlice'
import routes from '../constants/routes'
import { NavFavorites } from './NavFavorites'

export const NavigationCard = ({navigation}) => {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Text style={{ color: COLORS.black, alignSelf: 'center', paddingVertical: SIZES.padding * 2, ...FONTS.h2 }}>Good Morning, Steve</Text>
            <View style={{ borderTopColor: COLORS.lightGray, borderTopWidth: 2, flexShrink: 1 }}>
                <View>
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
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description
                                }))
                                navigation.navigate(routes.RIDER_OPTIONS_CARD)
                            
                        }}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en'
                        }}
                        styles={styles}
                    />
                </View>
                <NavFavorites/>
            </View>

        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.padding * 1
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
        color: COLORS.darkgray,
    },
    textInputContainer: {
        paddingHorizontal: SIZES.padding * 1.5,
        paddingBottom: 0
    },
    predefinedPlacesDescription: {
        color: 'black',
    },
    listView: {
        color: COLORS.black,
        paddingHorizontal: SIZES.padding * 1.5,
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
})