import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../redux/navSlice'



const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    
]

export const NavOptions = ({onPress}) => {
    const origin = useSelector(selectOrigin)
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
                    disabled={!origin}

                    onPress={onPress}
                >
                    <View style={{opacity: !origin ? 0.5 : 1,}}>
                        <Image
                            style={{ width: 120, height: 120 }} resizeMode='contain'
                            source={images.van}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                        
                        <Image
                            style={{
                                marginTop:SIZES.padding * 2,
                                width: 20,
                                height:20,
                                tintColor: COLORS.turquoise,
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