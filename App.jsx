import { KeyboardAvoidingView,Platform } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/redux/store';
import { HomeScreen,MapScreen } from './src/screens';
import routes from './src/constants/routes';




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
                        initialRouteName={routes.HOME_SCREEN}
                        >
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