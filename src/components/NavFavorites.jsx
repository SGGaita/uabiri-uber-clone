import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { setOrigin, setDestination, selectOrigin } from '../redux/navSlice'

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, London, UK",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "London Eye, London, UK",
    }
]

export const NavFavorites = () => {
    const dispatch = useDispatch()
    const origin = useSelector(selectOrigin)
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View
                    style={{ backgroundColor: COLORS.gray, height: 0.5 }}>

                </View>
            )}
            renderItem={({ item: { icon, location, destination } }) => (
                <TouchableOpacity

                    style={{ padding: SIZES.padding * 2, flexDirection: 'row', alignItems: "center", }}>
                    <View style={{

                        backgroundColor: COLORS.gray,
                        padding: SIZES.padding * 1,
                        borderRadius: 20,
                        marginRight: 20
                    }}>
                        <Image
                            source={icons[icon]}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.black,

                            }}
                        />
                    </View>
                    <View>
                        <Text style={{ color: COLORS.black, fontSize: 20, fontWeight: 700 }}>{location}</Text>
                        <Text style={{ color: COLORS.darkgray, fontSize: 18 }}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({})