import React from 'react';
import { Image } from 'react-native';
import OutlayBar from './ico/wallet_right.png';

export const OutlayNavBar = (props) => {
    return (
        <Image 
            source={OutlayBar} 
            style={{ tintColor: props.focused ? 'skyblue' : 'grey', width: 40, height: 40 }} 
        />
    ); 
};
