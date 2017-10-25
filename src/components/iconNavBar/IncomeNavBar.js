import React from 'react';
import { Image } from 'react-native';
import IncomeBar from './ico/wallet_left.png';

export const IncomeNavBar = (props) => {
    return (
            <Image 
                source={IncomeBar} 
                style={{ tintColor: props.focused ? 'skyblue' : 'grey', width: 40, height: 40 }} 
            />
    ); 
};
