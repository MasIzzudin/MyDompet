import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header } from './common';
import gambar from './image/money.jpg';

export class MainForm extends Component {
    onPressIn() {
        Actions.loginForm();
    }
    render() {
        const {
            textStyle, } = Style;
        return (
            <ImageBackground source={gambar} style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'rgba(255,215,0,0.5)', flex: 1 }} >
                    <View 
                    style={{ 
                        flex: 1,
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column' }}
                    >
                        <Header>
                            MYDOMPET
                        </Header>

                        <TouchableOpacity
                            onPress={this.onPressIn.bind(this)}
                        >
                            <Text style={textStyle}>Press the Button</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const Style = {
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 26,
        fontWeight: '600',
    }
};

export default MainForm;
