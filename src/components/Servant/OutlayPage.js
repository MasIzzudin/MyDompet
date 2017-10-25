import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Picker } from 'react-native';
import { OutlayChanged } from '../../Actions';
import Date from '../DatePicker/Date';

class OutlayPage extends Component {
    render() {
        const { ContainerDateStyle,
                TextDateStyle,
                ContainerCategoryStyle,
                TextCategoryStyle,
                ContainerInfoStyle,
                TextInfoStyle,
                InputInfoStyle,
                containerNominalStyle,
                InputNominalStyle,
                TextNominalStyle
            } = Style;

        return (
            <View style={{ flex: 1 }}>
                <View style={ContainerDateStyle}>
                    <Text style={TextDateStyle}>Tanggal :</Text>
                    <Date 
                        date={this.props.date}
                        onDateChange={value => this.props.OutlayChanged({ clan: 'date', value })}
                    />
                </View>

                <View style={ContainerCategoryStyle}>
                    <Text style={TextCategoryStyle}> Kategori : </Text>
                    <Picker 
                        style={{ width: 110, marginLeft: 80, flex: 1 }} 
                        mode='dropdown'
                        selectedValue={this.props.picker}
                        onValueChange={value => this.props.OutlayChanged({ clan: 'picker', value })}
                    >
                        <Picker.Item label='Belanja' value='Belanja' />
                        <Picker.Item label='Bisnis' value='Bisnis' />
                        <Picker.Item label='Other' value='Other' />
                    </Picker>
                </View>

                <View style={ContainerInfoStyle}>
                    <Text style={TextInfoStyle}> Keterangan :</Text>
                    <TextInput 
                        placeholder='Ket'
                        underlineColorAndroid='transparent'
                        style={InputInfoStyle}
                        placeholderTextColor='white'
                        value={this.props.inform}
                        onChangeText={value => this.props.OutlayChanged({ clan: 'inform', value })}
                    />
                </View>

                <View style={containerNominalStyle}>
                    <Text style={TextNominalStyle}> Nominal :</Text>
                    <TextInput 
                        placeholder='Nominal Anda'
                        underlineColorAndroid='transparent'
                        placeholderTextColor='silver'
                        style={InputNominalStyle}
                        value={this.props.nominal}
                        onChangeText={value => this.props.OutlayChanged({ clan: 'nominal', value })}
                        keyboardType='numeric'
                    
                    />
                </View>
            </View>
        );
    }
}

const Style = {
    ContainerDateStyle: {
        flexDirection: 'row',
        marginTop: 15,
        backgroundColor: 'silver'
    },

    TextDateStyle: {
        color: 'black',
        paddingTop: 10,
        paddingLeft: 20,
    },

    ContainerCategoryStyle: {
        flexDirection: 'row',
        marginTop: 10
    },

    TextCategoryStyle: {
        color: 'black',
        paddingTop: 15,
        paddingLeft: 17,
    },
    
    ContainerInfoStyle: {
        flexDirection: 'row',
        backgroundColor: 'silver',
        marginTop: 10
    },

    TextInfoStyle: {
        color: 'black',
        paddingTop: 15,
        paddingLeft: 17,
    },

    InputInfoStyle: {
        color: 'black',
        marginRight: 25,
        fontSize: 14,
        lineHeight: 23,
        height: 50,
        width: 200,
        marginLeft: 50,
        paddingBottom: 10
    },

    containerNominalStyle: {
        height: 50,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1,
        marginBottom: 20,
    },

    InputNominalStyle: {
        color: 'black',
        marginRight: 25,
        fontSize: 30,
        lineHeight: 23,
        height: 80,
        width: 400,
        paddingBottom: 18,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 1,
        elevation: 1
    },

    TextNominalStyle: {
        color: 'black',
        paddingLeft: 20,
        paddingBottom: 100,
        position: 'absolute'
    }

};

const mapStateToProps = state => {
    const { date, inform, picker, nominal } = state.outlay;

    return { date, inform, picker, nominal };
};

export default connect(mapStateToProps, { OutlayChanged })(OutlayPage);
