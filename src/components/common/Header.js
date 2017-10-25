import React from 'react';
import { Text, View } from 'react-native';

export const Header = ({ children }) => {
    const { TextStyle, ViewStyle, SubtitleStyle } = style;
    return (
            <View style={ViewStyle}>
                <Text style={TextStyle}>{children}</Text>
                <Text style={SubtitleStyle}>
                Aplikasi yang paling mengerti isi Dompet Anda :)
                </Text>
            </View>
    );
};

const style = {
    ViewStyle: {
        height: 140,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 90 },
        shadowOpacity: 0.2,
        elevation: 10,
        position: 'relative',
        opacity: 40,
      

    },

    TextStyle: {
        fontSize: 40,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Games'
    },
    SubtitleStyle: {
        marginTop: 5,
        textAlign: 'center',
        color: 'black',
        fontSize: 15,
    }
};
