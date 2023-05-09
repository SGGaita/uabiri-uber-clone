import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, routes } from '../constants'
import { Map } from '../components'
import { NavigationCard, RiderOptionsCard } from '../components'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const MapScreen = ({ navigation }) => {
    const Stack = createNativeStackNavigator();

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{
                    backgroundColor: COLORS.white,
                    zIndex: 50,
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    padding: SIZES.padding * 1,
                    borderRadius: 20,
                    elevation: 4
                }}>
                <Image
                    source={icons.menu}
                    resizeMode='contain'
                    style={{ width: 15, height: 15, tintColor: COLORS.black }}
                />
            </TouchableOpacity>


            <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
                <Map />
            </View>
            <View style={{ flex: 1 }}>
                <Stack.Navigator>
                    <Stack.Screen
                        name={routes.NAVIGATION_CARD}
                        component={NavigationCard}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name={routes.RIDER_OPTIONS_CARD}
                        component={RiderOptionsCard}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})