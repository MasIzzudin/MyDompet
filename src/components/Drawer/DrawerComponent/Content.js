import React from 'react';
import { View, TouchableOpacity, Image, Text, TouchableHighlight } from 'react-native';
import ImageOut from '../../image/ic_power_settings_new_black_24dp_2x.png';
import Transaction from '../../image/bank_transaction.png';
import Home from '../../iconNavBar/ico/ic_home_black_24dp.png';

const Content = ({ onLogout, onPressList, onPressHome }) => {
        const { wrapParentStyle, logOutStyle, wrapLogOutStyle, listStyle,
             TextStyle, Button1, Button2, LabelImageStyle } = Style;
        return (
            <View style={wrapParentStyle}>
                <View style={listStyle}>
                    <TouchableHighlight
                        underlayColor='gray'
                        onPress={onPressHome}
                    >
                        <View style={Button1}>
                            <Image source={Home} style={LabelImageStyle} />
                            <Text style={TextStyle}> Beranda </Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor='gray'
                        onPress={onPressList}
                    >
                        <View style={Button2}>
                            <Image source={Transaction} style={LabelImageStyle} />
                            <Text style={TextStyle}> Transaksi </Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={logOutStyle} >
                    <TouchableOpacity 
                    onPress={onLogout} 
                    >
                        <View style={wrapLogOutStyle}>
                            <Image source={ImageOut} style={LabelImageStyle} />
                            <Text style={TextStyle}> Log out </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
     );
};

const Style = {
    wrapParentStyle: {
        flexDirection: 'column',
        flex: 1
    },

    listStyle: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
        flexDirection: 'column'
    },

    Button1: {
        width: 240,
        height: 30,
        shadowColor: 'black', 
        shadowOffset: { width: 20, height: 5 }, 
        shadowOpacity: 1,
        elevation: 1,
        flexDirection: 'row',
        position: 'relative'
    },

    Button2: {
        width: 240,
        height: 30,
        shadowColor: 'black', 
        shadowOffset: { width: 20, height: 5 }, 
        shadowOpacity: 1,
        elevation: 1,
        flexDirection: 'row',
        position: 'relative'
    },

    TextStyle: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        paddingLeft: 35
    },

    LabelImageStyle: {
        marginLeft: 15,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3
    },

    logOutStyle: {
        position: 'relative',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 15,
        flex: 1,
    },
    
    wrapLogOutStyle: {
        width: 240,
        height: 50,
        flexDirection: 'row',
        position: 'relative'
    }
};

export default Content;
