import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class IncomeList extends Component {
    render() {
        const { nominal } = this.props.income;
        return (
            <View>
                <Text 
                style={Style.textStyle}
                >
                        {nominal}
                </Text>
            </View>
        );
    }
}

const Style = {
    textStyle: {
        textAlign: 'center', 
        color: 'black', 
        fontSize: 38, 
        paddingTop: 25
    }
};
