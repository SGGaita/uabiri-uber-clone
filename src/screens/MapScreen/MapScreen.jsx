import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import { Map } from '../../components'
import routes from '../../constants/routes';
import { NavigationCard, RiderOptionsCard } from '../../components'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const MapScreen = () => {
    const Stack = createNativeStackNavigator();

    return (
        <View style={{ flex: 1 }}>
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