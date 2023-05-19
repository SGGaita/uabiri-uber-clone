import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons ,routes} from '../constants'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, setDestination } from '../redux/navSlice'
import { NavFavorites } from './NavFavorites'
import { Greetings } from './Greetings'

export const NavigationCard = ({ navigation }) => {
    const dispatch = useDispatch()
    const destination = useSelector(selectDestination)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Greetings onPress={()=> navigation.navigate(routes.HOME_DRAWER)} />
            <View style={{ borderTopColor: COLORS.gray, borderTopWidth: 2, flexShrink: 1 }}>
                <View>
                    <GooglePlacesAutocomplete

                        placeholder='Where From?'
                        textInputProps={{
                            placeholderTextColor: COLORS.darkgray,
                            returnKeyType: "search",
                            backgroundColor:COLORS.inputBlue
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
                <NavFavorites />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: SIZES.padding * 2,
                marginTop: 'auto',
                borderColor: COLORS.gray,
                borderTopWidth: 1
            }}>
                <TouchableOpacity
                disabled={!destination}
                    onPress={() => {

                        navigation.navigate(routes.RIDER_OPTIONS_CARD)

                    }}
                    style={
                        {
                            flexDirection: 'row',
                            width: 100,
                            borderRadius: 30,
                            paddingHorizontal: SIZES.padding * 2.1,
                            paddingVertical: SIZES.padding * 1,
                            backgroundColor: COLORS.primary,
                            alignContent: 'center',
                            justifyContent: 'space-between',
                            opacity: !destination ? 0.5 : 1,
                        }}
                >

                    <Image
                        source={icons.busFront}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.white,

                        }}
                    />

                    <Text style={{ color: COLORS.white, textAlign: 'center' }}>Rides</Text>
                </TouchableOpacity>
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
        backgroundColor: 'white',
        padding: 13,
        height: 44,
        flexDirection: 'row',
    },
    description: {
        color: COLORS.black
    },
})