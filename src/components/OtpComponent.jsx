import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

export const OtpComponent = () => {
    const [otp, setOtp] = useState('');
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const [focusedIndex, setFocusedIndex] = useState(null);

    const handleInputFocus = (index) => {
        setFocusedIndex(index);
    };

    const handleInputBlur = () => {
        setFocusedIndex(null);
    };

    const handleInputChange = (index, text) => {
        setOtp(prevOtp => {
            const newOtp = prevOtp.split('');
            newOtp[index] = text;
            return newOtp.join('');
        });

        if (index === 0) {
            ref2.current.focus();
        } else if (index === 1) {
            ref3.current.focus();
        } else if (index === 2) {
            ref4.current.focus();
        }
    };


    return (
        <View style={styles.otpContainer}>
            <TextInput
                value={otp[0]}
                onChangeText={(text) => handleInputChange(0, text)}
                maxLength={1}
                style={[styles.otpInput, focusedIndex === 0 && { borderColor: COLORS.turquoise },]}
                onFocus={() => handleInputFocus(0)}
                onBlur={handleInputBlur}
                keyboardType="numeric"
            />
            <TextInput
                ref={ref2}
                value={otp[1]}
                onChangeText={(text) => handleInputChange(1, text)}
                maxLength={1}
                style={[styles.otpInput, focusedIndex === 1 && { borderColor: COLORS.turquoise },]}
                onFocus={() => handleInputFocus(0)}
                onBlur={handleInputBlur}
                keyboardType="numeric"
            />
            <TextInput
                ref={ref3}
                value={otp[2]}
                onChangeText={(text) => handleInputChange(2, text)}
                maxLength={1}
                style={[styles.otpInput, focusedIndex === 2 && { borderColor: COLORS.turquoise },]}
                onFocus={() => handleInputFocus(0)}
                onBlur={handleInputBlur}
                keyboardType="numeric"
            />
            <TextInput
                ref={ref4}
                value={otp[3]}
                onChangeText={(text) => handleInputChange(3, text)}
                maxLength={1}
                style={[styles.otpInput, focusedIndex === 3 && { borderColor: COLORS.turquoise },]}
                onFocus={() => handleInputFocus(0)}
                onBlur={handleInputBlur}
                keyboardType="numeric"
            />
        </View>
    );

};

const styles = StyleSheet.create({
    otpContainer: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    otpInput: {
        height: 60,
        width: 75,
        borderWidth:1,
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        borderWidth:0.5,
        textAlign: 'center',
        color: COLORS.turquoise,
        marginHorizontal: 5,
        fontSize: 25
    },
});


