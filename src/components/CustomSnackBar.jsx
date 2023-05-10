import React from 'react';
import { Snackbar } from 'react-native-paper';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { images, COLORS, icons } from '../constants';

export const CustomSnackBar = ({ visible, onDismissSnackBar, type, message, snackbarBgColor, iconBgColor, onPress }) => {
  let backgroundColor, iconBackgroundColor, icon;

  switch (type) {
    case 'success':
      backgroundColor = snackbarBgColor || COLORS.greens;
      iconBackgroundColor = iconBgColor || COLORS.darkGreen;
      tintColor = COLORS.darkGreen;
      icon = icons.check;
      heading="Well Done!";
      break;
    case 'warning':
      backgroundColor = snackbarBgColor || COLORS.oranges;
      iconBackgroundColor = iconBgColor || COLORS.darkOrange;
      tintColor = COLORS.darkOrange;
      icon = icons.warning;
      heading="Warning!";
      break;
    case 'info':
      backgroundColor = snackbarBgColor || COLORS.blue;
      iconBackgroundColor = iconBgColor || COLORS.darkBlue;
      tintColor = COLORS.darkBlue;
      icon = icons.info;
      heading="Hey There!";
      break;
    default:
      backgroundColor = snackbarBgColor || COLORS.red;
      iconBackgroundColor = iconBgColor || COLORS.darkRed;
      tintColor = COLORS.darkRed;
      icon = icons.close;
      heading="Oh Snap!";
  }

  return (
    <Snackbar
      visible={visible}
      duration={40000}
      onDismiss={onDismissSnackBar}
      style={[styles.snackbar, { backgroundColor }]}
    >
      <View style={[styles.snackbarContent, { backgroundColor }]}>
        <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
          <Image source={icon} resizeMode='contain' style={styles.icon} />
        </View>
        <View style={{position:'absolute', bottom:-12, left:-16, borderBottomLeftRadius:25}}>
                <Image source={images.splatter} resizeMode='contain' style={{width:70, height:70, tintColor, borderBottomLeftRadius: 25}}/>
                </View>
        <View style={styles.messageContainer}>
        <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
        <TouchableOpacity
        onPress={onPress}
        style={styles.closeButton} >
          <Image source={icons.close} resizeMode='contain' style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
    </Snackbar>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    borderRadius: 25,
    marginHorizontal: 20,
  },
  snackbarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  iconContainer: {
    position:'absolute',
    top:-30,
    left:30,
    
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    
    borderRadius:30
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: '#fff',
    padding:10
  },
  messageContainer: {
    flex: 1,
    paddingLeft:60,
  },
  heading:{
    fontSize:28,
    color:COLORS.white,
    marginBottom:5,
  },
  message: {
    fontSize: 16,
    color: '#fff',
    
  },
  closeButton: {
    marginLeft: 16,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    width: 16,
    height: 16,
    tintColor: '#fff',
  },
});
