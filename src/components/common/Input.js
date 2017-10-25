import React from 'react';
import { TextInput, View } from 'react-native';

export const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
    const { ContainerStyle, InputStyle } = styles;

    return (
    <View style={ContainerStyle}>
        <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            style={InputStyle}
            value={value}
            onChangeText={onChangeText} 
        />
    </View>
    );
};

const styles = {
    ContainerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    InputStyle: {
        color: 'black',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 14,
        lineHeight: 23,
        flex: 2,
        height: 60,
        width: 330,
    }

};
