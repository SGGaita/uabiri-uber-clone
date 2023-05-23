import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { EWalletScreen, HomeScreen, MapScreen, PaymentScreen, ProfileScreen, RideHistoryScreen,HelpScreen, SelectSeatScreen, SettingScreen } from '../screens';
import { routes, COLORS, FONTS, images, SIZES, icons } from '../constants/';
import { selectUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import AvatarChange from '../components/AvatarChange';
import AvatarEditScreen from '../screens/AvatarEditScreen';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const CustomDrawerContent = (props) => {
   // const { name } = useSelector(selectUser)
    const navigation = useNavigation();


    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, }}>

            {/* Add content here */}
            <View style={{ padding: '15%', marginTop: -5, borderBottomWidth: 0.5, borderBottomColor: COLORS.gray, flexDirection: 'column', backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' }}>
                <AvatarChange onPress={ ()=>navigation.navigate(routes.AVATAR_CHANGE_SCREEN)} />
                <View style={{ paddingTop: 15 }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 300 }}>Steve</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate(routes.PROFILE_SCREEN)}
                    style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <Text style={{ color: COLORS.inputBlue, fontSize: 16, fontWeight: 300, paddingRight: 5 }}>View profile</Text>
                </TouchableOpacity>
            </View>


            <View style={{ paddingTop: 30 }}>
                <DrawerItemList {...props} labelStyle={{ color: 'black' }} />
                {/*! To change this later*/}
                <DrawerItem
                    icon={({ color, size }) => (
                        <Image source={icons.info} resizeMode='contain' style={{ width: 25, height: 25, tintColor: COLORS.primary }} />
                    )}

                    labelStyle={{ color: 'black', fontSize: 20, fontWeight: 300, marginLeft: -4 }}
                    label="Help & Support"
                    onPress={() => navigation.navigate(routes.HELP_SCREEN)}
                     />
                <View
                    style={{ backgroundColor: COLORS.gray, height: 0.5 }}>

                </View>

                <DrawerItem
                    icon={({ color, size }) => (
                        <Image source={icons.logout} resizeMode='contain' style={{ width: 25, height: 25, tintColor: COLORS.primary }} />
                    )}

                    labelStyle={{ color: 'black', fontSize: 20, fontWeight: 300, marginLeft: -4 }}
                    label="Logout" onPress={() =>{}} />

                   
            </View>

            <View style={{padding:20,position:'absolute', bottom:0,alignSelf:'center'}}>
                        <Text style={{color:COLORS.primary}}>App Version - V1.00</Text>
                    </View>
        </DrawerContentScrollView>
    );
}

export const MainNavigation = () => {


    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerStyle={{
                width: 300,
                backgroundColor: 'black',

            }}
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: { color: COLORS.black, fontSize: 20, fontWeight: 300 }
            }}
        >
            <Drawer.Screen
                name={routes.HOME_DRAWER}
                options={{
                    headerShown: false,
                    drawerIcon: ({ focused, size }) => (
                        <Image source={icons.getRide} resizeMode='contain' style={{ height: 20, width: 20, tintColor: COLORS.primary }} />
                    )
                }} >
                {() => (
                    <Stack.Navigator>
                        <Stack.Screen
                            name={routes.HOME_SCREEN}
                            component={HomeScreen}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen
                            name={routes.MAP_SCREEN}
                            component={MapScreen}
                            options={{
                                headerShown: false,
                                headerTitleStyle: { fontSize: 12 }
                            }}
                        />

                        <Stack.Screen
                            name={routes.SELECT_SEAT_SCREEN}
                            component={SelectSeatScreen}
                            options={{
                                headerTitle: 'Select Seat(s)',
                                headerTitleAlign: 'center',
                                headerShown: true,
                            }}
                        />

                        <Stack.Screen
                            name={routes.PROFILE_SCREEN}
                            component={ProfileScreen}
                            options={{
                                headerTitle: 'Profile',
                                headerTitleAlign: 'center',
                                headerShown: true,
                            }}
                        />
                         <Stack.Screen
                            name={routes.HELP_SCREEN}
                            component={HelpScreen}
                            options={{
                                headerTitle: 'Help & Support',
                                headerTitleAlign: 'center',
                                headerShown: true,
                            }}
                        />
                        <Stack.Screen
                            name={routes.AVATAR_CHANGE_SCREEN}
                            component={AvatarEditScreen}
                            options={{
                                headerTitle: 'Change Profile Image',
                                headerTitleAlign: 'center',
                                headerShown: true,
                            }}
                        />
                    </Stack.Navigator>
                )}

            </Drawer.Screen>

            <Drawer.Screen
                name={routes.EWALLET_SCREEN}
                component={EWalletScreen}
                options={{
                    headerTitle: 'EWallet',
                    headerTitleAlign: 'center',
                    headerShown: true,
                    drawerIcon: ({ focused, size }) => (
                        <Image source={icons.ewallet} resizeMode='contain' style={{ height: 20, width: 20, tintColor: COLORS.primary }} />
                    )
                }}
            />

            <Drawer.Screen
                name={routes.PAYMENT_DRAWER}
                component={PaymentScreen}
                options={{
                    headerTitle: 'Payments',
                    headerTitleAlign: 'center',
                    headerShown: true,
                    drawerIcon: ({ focused, size }) => (
                        <Image source={icons.payment} resizeMode='contain' style={{ height: 20, width: 20, tintColor: COLORS.primary }} />
                    )
                }} />
            <Drawer.Screen
                name={routes.RIDE_HISTORY_SCREEN}
                component={RideHistoryScreen}
                options={{
                    headerTitle: 'Ride History',
                    headerTitleAlign: 'center',
                    headerShown: true,
                    drawerIcon: ({ focused, size }) => (
                        <Image source={icons.history} resizeMode='contain' style={{ height: 20, width: 20, tintColor: COLORS.primary }} />
                    )
                }}
            />

            <Drawer.Screen
                name={routes.SETTINGS_SCREEN}
                component={SettingScreen}
                options={{
                    headerTitle: 'Settings',
                    headerTitleAlign: 'center',
                    headerShown: true,
                    drawerIcon: ({ focused, size }) => (
                        <Image source={icons.settings} resizeMode='contain' style={{ height: 20, width: 20, tintColor: COLORS.primary }} />
                    )
                }}
            />
        </Drawer.Navigator>

    )

}

