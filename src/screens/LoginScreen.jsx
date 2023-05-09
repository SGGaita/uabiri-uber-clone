import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons, routes } from '../constants';
import { CustomSnackBar } from '../components';

export const LoginScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };


  return (
    <View style={{ backgroundColor: COLORS.white, flexGrow: 1, flexDirection: 'column', alignItems: 'center', }}>
      <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 120, marginBottom: 20 }}>
        <Text style={{ color: COLORS.black, fontSize: 35, fontWeight: 600, marginBottom: 5 }}>Login</Text>
        <Text style={{ color: COLORS.darkgray, fontSize: SIZES.body2, paddingHorizontal: SIZES.padding * 2, textAlign: 'center' }}>Please enter your Full name, email address and password to create your account.</Text>
      </View>
      <TouchableOpacity
        onPress={() => (navigation.navigate(routes.START_SCREEN))}
        style={{
          backgroundColor: COLORS.lightGray,
          zIndex: 50,
          position: 'absolute',
          top: 20,
          left: 20,
          padding: SIZES.padding * 1,
          borderRadius: 20,

        }}>
        <Image source={icons.arrowLeft} resizeMode='contain' style={{ width: 15, height: 15, tintColor: COLORS.black }} />
      </TouchableOpacity>



      <View style={{
        width: '90%', margin: 10, //backgroundColor: COLORS.white, 
        padding: SIZES.padding,
      }}>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.lightGray,
          borderColor: isFocused ? COLORS.green : COLORS.gray,
          borderWidth: 0.5,
          marginBottom: 15
        }}>
          <Image source={icons.email} resizeMode='contain' style={{ flex: 1, padding: SIZES.padding * 0.5, width: 30, height: 30, tintColor: COLORS.darkgray }} />
          <TextInput
            style={{
              flex: 8,
              padding: SIZES.padding * 1.5,
              color: COLORS.green,
              fontSize: 20,
              borderRadius: 5,

            }}
            placeholderTextColor={COLORS.gray}
            placeholder='Enter your email'
            onFocus={handleFocus}
            onBlur={handleBlur}

          />
        </View>


        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.lightGray,
          borderColor: isFocused ? COLORS.green : COLORS.gray,
          borderWidth: 0.5,
          marginBottom: 15
        }}>
          <Image source={icons.lock} resizeMode='contain' style={{ flex: 1, padding: SIZES.padding * 0.5, width: 30, height: 30, tintColor: COLORS.darkgray }} />
          <TextInput
            style={{
              flex: 8,
              padding: SIZES.padding * 1.5,
              color: COLORS.green,
              fontSize: 20,
              borderRadius: 5,

            }}
            placeholderTextColor={COLORS.gray}
            placeholder='Password'
            onFocus={handleFocus}
            onBlur={handleBlur}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={{
            //width: '85%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          }}>

          <Text style={{ color: COLORS.green, fontSize: SIZES.h2, fontWeight: 700, marginVertical: 5 }}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(routes.HOME_SCREEN)}
          style={{
            //width: '85%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: SIZES.button_padding,
            backgroundColor: COLORS.green,
            marginVertical: 20,
            borderRadius: 35
          }}>
          <Text style={{ color: COLORS.white, fontSize: SIZES.body2 }}>Login</Text>
        </TouchableOpacity>


        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
          <Text style={{ color: COLORS.darkgray, fontSize: SIZES.body2, paddingHorizontal: SIZES.padding, textAlign: 'center' }}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.USER_REGISTRATION_SCREEN)}
          >
            <Text style={{ color: COLORS.orange, fontSize: SIZES.h2, fontWeight: 700, marginVertical: 5 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>


      </View>


      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: SIZES.padding * 2 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: COLORS.gray }}></View>
        <Text style={{ flex: 1, textAlign: 'center', color: COLORS.darkgray, fontSize: SIZES.h2 }}>Sign in with</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: COLORS.gray }}></View>
        <View>
        </View>


      </View>

      <View style={{ width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: SIZES.padding * 2 }}>

        <TouchableOpacity>
          <Image source={icons.google} resizeMode='contain' style={{ width: 30, height: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={icons.apple} resizeMode='contain' style={{ width: 30, height: 30 }} />
        </TouchableOpacity>



      </View>
      <View style={{ flex: 1, position: 'absolute', bottom: 0, left: 30, right: 0, width: '100%' }}>
        <CustomSnackBar visible={visible} onDismissSnackBar={onDismissSnackBar} message={error} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})