import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, images } from '../constants'

const data = [
    {
        id: "123",
        icon: "avatar",
        date: "May 03, 2023, 07:00 PM",
        cost: 60,
        distance: '7.4 km',
        time: '15 min'
    },
    {
        id: "456",
        icon: "avatar",
        date: "April 13, 2023, 10:00 AM",
        cost: 70,
        distance: '9.0 km',
        time: '25 min'
    },
    {
        id: "789",
        icon: "avatar",
        date: "April 09, 2023, 16:27 PM",
        cost: 50,
        distance: '2.5 km',
        time: '10 min'
    }
]

export const RideHistory = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View
                    style={{ backgroundColor: COLORS.darkgray, height: 0.5 }}>
                </View>
            )}
            renderItem={({ item: { icon, date, distance, time, cost } }) => (
                <TouchableOpacity
                    style={{ padding: SIZES.padding * 1, backgroundColor: COLORS.white, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", }}>
                    <View style={{
                        backgroundColor: COLORS.inputBlue,
                        padding: SIZES.padding * 0.5,
                        borderRadius: 50,
                        marginRight: 20
                    }}>
                        <Image
                            source={images[icon]}
                            resizeMode='contain'
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        />
                    </View>
                    <View>
                        <Text style={{ color: COLORS.black, fontSize: 18, fontWeight: 600 }}>{date}</Text>
                        <Text style={{ color: COLORS.darkgray, fontSize: 18 }}>{distance}
                            <Image source={icons.fullStop} resizeMode='contain' style={{ width: 30, height: 30, tintColor: COLORS.darkgray }} />
                            {time}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: COLORS.black, fontSize: 18, fontWeight: 600 }}>
                            {
                                new Intl.NumberFormat('en-gb', {
                                    style: 'currency',
                                    currency: 'KES'
                                }).format(
                                    cost
                                )
                            }
                        </Text>
                    </View>
                    <View>
                        <Image source={icons.rightArrow} resizeMode='contain' style={{ width: 15, height: 15, tintColor: COLORS.gray }} />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}


const styles = StyleSheet.create({})