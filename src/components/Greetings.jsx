import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, FONTS, SIZES, icons } from '../constants'

export const Greetings = ({ onPress }) => {
    const [today, setToday] = useState(new Date());


    useEffect(() => {
        const timer = setInterval(() => {
            setToday(new Date());
        }, 1000);
        return () => clearInterval(timer);


    }, []);


    const hour = today.getHours();
    let greeting;

    if (hour < 12) {
        greeting = 'Good morning';
    } else if (hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }



    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    position: 'absolute',
                    top: 15,
                    left: 25,
                    padding: SIZES.padding
                }}
            >
                <Image source={icons.arrowLeft} resizeMode='contain' style={{ width: 15, height: 15 }} />
            </TouchableOpacity>
            <Text style={{ color: COLORS.black, alignSelf: 'center', paddingVertical: SIZES.padding * 2, ...FONTS.h2 }}>{greeting}, Steve</Text>
        </View>
    )
}

const styles = StyleSheet.create({})