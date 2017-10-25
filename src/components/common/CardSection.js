import React from 'react';
import { View } from 'react-native';

export const CardSection = (props) => {
    return (
        <View style={style.CardSectionStyle}>
            {props.children}
        </View>
    );
};

const style = {
    CardSectionStyle: {
        flexDirection: 'row',
        borderColor: 'transparent',
        position: 'relative',
        marginTop: 10,
        paddingLeft: 10,
    }
};
