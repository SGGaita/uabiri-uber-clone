import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, icons } from '../constants'
//import { } from


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    }
]

export const NavOptions = ({navigation}) => {
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
            (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding * 1,
                        paddingLeft: SIZES.padding * 3,
                        paddingBottom: SIZES.padding * 4,
                        paddingTop: SIZES.padding * 2,
                        margin: SIZES.padding * 1,
                        backgroundColor: COLORS.gray,
                        width: 170

                    }}

                    onPress={() => navigation.navigate('Map')}
                >
                    <View>
                        <Image
                            style={{ width: 120, height: 120 }} resizeMode='contain'
                            source={{ uri: item.image }}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                        
                        <Image
                            style={{
                                marginTop:SIZES.padding * 2,
                                width: 30,
                                height:30,
                                //tintColor: COLORS.white,
                                //backgroundColor:COLORS.black,
                                paddingLeft:10,
                                borderRadius:15
                            }}
                            source={icons.arrowRight}

                        />
                    </View>
                </TouchableOpacity>
            )
            }
        />
    )
}



const styles = StyleSheet.create({
    title: {
        color: COLORS.black,
        marginTop: SIZES.padding * 1,
        ...FONTS.h3,
        fontWeight: 700
    }
})