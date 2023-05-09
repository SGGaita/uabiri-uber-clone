import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { COLORS, images, SIZES, icons, routes, FONTS } from '../constants';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { CustomSnackBar } from '../components';


export const UserRegistrationInfoScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [visible, setVisible] = useState(true)
  const [error, setError] = useState("Error")


  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFullNameChange = (text) => {
    setFullName(text);
    setFullNameError('');
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError('');
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError('');
  };


  const onDismissSnackBar = () => setVisible(false);

  const validateInputs = () => {
    let valid = true;

    if (!fullName) {
      setFullNameError('Please enter your full name');
      valid = false;
    }

    if (!email) {
      setEmailError('Please enter your email address');
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    }
    if (!password) {
      setPasswordError('Please enter your password');
      valid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      valid = false;
    }

    return valid;
  };


  const handleSignUp = (() => {
    if (validateInputs()) {
      setShow(true); 
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('User account created & signed in!', userCredential.user.uid);
        firestore()
          .collection('Users')
          .doc(userCredential.user.uid)
          .set({
            email: email,
            fullName: fullName,
          })
          .then(() => {
            setShow(false)
            navigation.navigate(routes.SUCCESS_SCREEN)
          }).catch(error => {
            setShow(false)
            console.log("error", error)
          });
      })
      .catch(error => {
        setShow(false)
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });

  })


  return (
    <View style={{ backgroundColor: COLORS.white, flexGrow: 1, flexDirection: 'column', alignItems: 'center', }}>
      <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 120, marginBottom: 20 }}>
        <Text style={{ color: COLORS.black, fontSize: SIZES.h1, fontWeight: 700, marginBottom: 5 }}>Account Registration</Text>
        <Text style={{ color: COLORS.darkgray, fontSize: SIZES.body2, paddingHorizontal: SIZES.padding * 2, textAlign: 'center' }}>Please enter your Full name, email address and password to create your account.</Text>
      </View>
      <TouchableOpacity
        onPress={() => (navigation.navigate(routes.OTP_SCREEN))}
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
        {fullNameError && <Text style={{ color: 'red', marginBottom: 10 }}>{fullNameError}</Text>}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.lightGray,
          borderColor: fullNameError ? COLORS.red : (isFocused ? COLORS.green : COLORS.gray),
          borderWidth: 0.5,
          marginBottom: 15
        }}>
          <Image source={icons.user} resizeMode='contain' style={{ flex: 1, padding: SIZES.padding * 0.5, width: 30, height: 30, tintColor: COLORS.darkgray }} />
          <TextInput
            style={{
              flex: 8,
              padding: SIZES.padding * 1.5,
              color: COLORS.turquoise,
              fontSize: 20,
              borderRadius: 5,

            }}
            placeholderTextColor={COLORS.gray}
            placeholder='Full name'
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleFullNameChange}
            value={fullName}
          />

        </View>

        {emailError && <Text style={{ color: 'red', marginBottom: 10 }}>{emailError}</Text>}
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
            onChangeText={handleEmailChange}
            value={email}
          />
        </View>

        {passwordError && <Text style={{ color: 'red', marginBottom: 10 }}>{passwordError}</Text>}
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
            onChangeText={handlePasswordChange}
            value={password}
          />
        </View>

        <TouchableOpacity
          onPress={handleSignUp}
          style={{
            //width: '85%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: SIZES.button_padding,
            backgroundColor: COLORS.green,
            marginVertical: 20,
            borderRadius: 35
          }}>
          {show ?
            (
              <>
                <ActivityIndicator size={25} color='white' />
                <Text style={{ color: COLORS.white, ...FONTS.body2 }}>Signing up...</Text>
              </>
            ) : (
              <Text style={{ color: COLORS.white, fontSize: SIZES.body2 }}>Sign Up</Text>
            )}
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
          <Text style={{ color: COLORS.darkgray, fontSize: SIZES.body2, paddingHorizontal: SIZES.padding, textAlign: 'center' }}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
          >
            <Text style={{ color: COLORS.orange, fontSize: SIZES.h2, fontWeight: 700, marginVertical: 5 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: SIZES.padding * 2 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: COLORS.gray }}></View>
        <Text style={{ flex: 1, textAlign: 'center', color: COLORS.darkgray, fontSize: SIZES.h2 }}>Sign up with</Text>
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
      <CustomSnackBar visible={visible} onDismissSnackBar={onDismissSnackBar} type="warning" message={error} />
    </View>
  )
}

const styles = StyleSheet.create({})