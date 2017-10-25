import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const Button = ({ onClick, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle} onPress={onClick}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'gold',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        marginRight: 10,
        marginBottom: 10
    }
};

