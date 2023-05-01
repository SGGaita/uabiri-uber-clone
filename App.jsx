import { KeyboardAvoidingView,Platform } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/redux/store';
import { HomeScreen,LoginScreen,MapScreen, OtpScreen, RegistrationScreen, StartScreen, UserRegistrationInfoScreen } from './src/screens';
import {routes} from './src/constants/';




const Stack = createNativeStackNavigator();

const App = () => {
    {
        return (
            <Provider store={store}>

                <NavigationContainer>
                    <SafeAreaProvider>
                        <KeyboardAvoidingView 
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={{flex:1}}>
                        <Stack.Navigator
                        initialRouteName={routes.START_SCREEN}
                        >
                             <Stack.Screen
                                name={routes.START_SCREEN}
                                component={StartScreen}
                                options={{
                                    headerShown: false,
                                }} />
                            <Stack.Screen
                                name={routes.LOGIN_SCREEN}
                                component={LoginScreen}
                                options={{
                                    headerShown: false,
                                }} />
                                <Stack.Screen
                                name={routes.REGISTRATION_SCREEN}
                                component={RegistrationScreen}
                                options={{
                                    headerShown: false,
                                }} />
                             <Stack.Screen
                                name={routes.OTP_SCREEN}
                                component={OtpScreen}
                                options={{
                                    headerShown: false,
                                }} />
                                 <Stack.Screen
                                name={routes.USER_REGISTRATION_SCREEN}
                                component={UserRegistrationInfoScreen}
                                options={{
                                    headerShown: false,
                                }} />
                            <Stack.Screen
                                name={routes.HOME_SCREEN}
                                component={HomeScreen}
                                options={{
                                    headerShown: false,
                                }} />
                            <Stack.Screen
                                name={routes.MAP_SCREEN}
                                component={MapScreen}
                                options={{
                                    headerShown: false,
                                }} />
                        </Stack.Navigator>
                        </KeyboardAvoidingView>
                      </SafeAreaProvider>
                </NavigationContainer>

            </Provider>

        )
    }
}

export default App