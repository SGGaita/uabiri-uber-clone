import { KeyboardAvoidingView,Platform } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/redux/store';
import {LoginScreen, OtpScreen, RegistrationScreen, StartScreen, UserRegistrationInfoScreen } from './src/screens';
import {routes} from './src/constants/';
import { MainNavigation } from './src/navigation/mainNavigation';




const Drawer = createDrawerNavigator();

const App = () => {
    {
        return (
            <Provider store={store}>

                <NavigationContainer>
                    <SafeAreaProvider>
                        <KeyboardAvoidingView 
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={{flex:1}}>
                        <Drawer.Navigator
                        initialRouteName={routes.HOME_SCREEN}
                        >
                             <Drawer.Screen
                                name={routes.START_SCREEN}
                                component={StartScreen}
                                options={{
                                    headerShown: false,
                                }} />
                            <Drawer.Screen
                                name={routes.LOGIN_SCREEN}
                                component={LoginScreen}
                                options={{
                                    headerShown: false,
                                }} />
                                <Drawer.Screen
                                name={routes.REGISTRATION_SCREEN}
                                component={RegistrationScreen}
                                options={{
                                    headerShown: false,
                                }} />
                             <Drawer.Screen
                                name={routes.OTP_SCREEN}
                                component={OtpScreen}
                                options={{
                                    headerShown: false,
                                }} />
                                 <Drawer.Screen
                                name={routes.USER_REGISTRATION_SCREEN}
                                component={UserRegistrationInfoScreen}
                                options={{
                                    headerShown: false,
                                }} />
                            <Drawer.Screen
                                name={routes.HOME_SCREEN}
                                component={MainNavigation}
                                options={{
                                    headerShown: false,
                                }} />
                            
                        </Drawer.Navigator>
                        </KeyboardAvoidingView>
                      </SafeAreaProvider>
                </NavigationContainer>

            </Provider>

        )
    }
}

export default App