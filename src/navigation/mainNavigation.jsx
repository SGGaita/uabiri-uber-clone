import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { HomeScreen, MapScreen } from '../screens';
import { routes, COLORS, FONTS, images, SIZES } from '../constants/';




const Drawer = createDrawerNavigator();


const CustomDrawerContent = (props) => {

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, }}>

            {/* Add content here */}
            <View style={{ paddingLeft: 30, flexDirection: 'row', backgroundColor: COLORS.green, height: 150, marginTop: -4, justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{
                    backgroundColor: COLORS.white, borderRadius: 60, height: 70, width: 70, alignSelf: 'center',
                    padding: SIZES.padding,
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                    <Image source={images.avatar} resizeMode='contain' style={{ padding: 30, borderRadius: 60, height: 60, width: 60 }} />
                </View>

                <View style={{ paddingLeft: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 25 }}>Steve Gaita</Text>
                    <Text style={{ color: '#fff', fontSize: 20 }}>Rating</Text>
                </View>
            </View>


            <View style={{ paddingTop: 50 }}>
                <DrawerItemList {...props} labelStyle={{ color: 'black' }} />
            </View>


            {/* Add logout button here */}
            <TouchableOpacity style={{ position: 'absolute', bottom: 20, left: 20 }}>
                <Text style={{ color: '#000', fontSize: 16 }}>Logout</Text>
            </TouchableOpacity>


        </DrawerContentScrollView>
    );
}

export const MainNavigation = () => {


    return (
        <Drawer.Navigator
        drawerWidth="95%"
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerStyle={{
                width: '5%',
                backgroundColor: 'transparent',

            }}
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: { color: COLORS.black, ...FONTS.body3 }
            }}
        >
            <Drawer.Screen
                name={routes.HOME_DRAWER}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }} />
            <Drawer.Screen
                name={routes.MAP_SCREEN}
                component={MapScreen}
                options={{
                    headerShown: false,
                }} />
        </Drawer.Navigator>

    )

}

