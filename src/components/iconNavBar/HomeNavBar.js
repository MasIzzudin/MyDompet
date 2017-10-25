import React from 'react';
import { Image } from 'react-native';
import HomeBar from './ico/ic_home_black_24dp.png';

export const HomeNavBar = (props) => {
    return (
         <Image 
         source={HomeBar}
         style={{ tintColor: props.focused ? 'skyblue' : 'grey', width: 40, height: 40 }} 
         />
    );
};
