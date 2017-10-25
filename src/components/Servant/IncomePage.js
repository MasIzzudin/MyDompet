import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { IncomeChanged, SaveIncomeSuccess, UpdateIncome } from '../../Actions';
import Date from '../DatePicker/Date';
import SaveImage from '../image/ic_done_black_24dp_1x.png';

class IncomePage extends Component {
    onSave() {
        const { date, inform, nominal } = this.props;
            this.props.SaveIncomeSuccess({ 
                date: date || moment().format('L'), 
                inform, 
                nominal
        });      
    }

    render() {
        const { 
            ContainerStyle, 
            InputStyle, 
            ContainerInputStyle, 
            TextStyle,
            containerDateStyle,
            TextDateStyle,
            containerInfoStyle,
            InformationStyle,
            InputInfoStyle,
            SaveStyle
        } = Style;

        return (
            <View style={ContainerStyle}>
                    <View style={containerDateStyle}>
                        <Text style={TextDateStyle}> Tanggal : </Text>
                        <Date 
                            date={this.props.date}
                            onDateChange={
                                value => this.props.IncomeChanged({ clan: 'date', value })
                            }
                        />
                    </View>

                    <View style={containerInfoStyle}>
                        <Text style={InformationStyle}> Keterangan : </Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Ket'
                            style={InputInfoStyle}
                            placeholderTextColor='white'
                            onChangeText={
                                value => this.props.IncomeChanged({ clan: 'inform', value })
                            }
                            value={this.props.inform}
                        />
                    </View>

                    <View style={ContainerInputStyle}>
                        <Text style={TextStyle}> Nominal: </Text>
                        <TextInput 
                            placeholder='Nominal Anda'
                            style={InputStyle}
                            keyboardType='numeric'
                            underlineColorAndroid='transparent'
                            placeholderTextColor='silver'
                            onChangeText={
                                value => this.props.IncomeChanged({ clan: 'nominal', value })
                            }
                            value={this.props.nominal}
                        />
                    </View>
                        <TouchableOpacity
                        style={SaveStyle}
                        onPress={this.onSave.bind(this)}
                        >
                                <Image source={SaveImage} />
                            </TouchableOpacity>
                </View>
        );
    }
}

const Style = {
    ContainerStyle: {
        flex: 1
    },

    TextStyle: {
        color: 'black',
        paddingLeft: 20,
        paddingBottom: 100,
        position: 'absolute'
    },

    ContainerInputStyle: {
        height: 50,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1,
        marginBottom: 20
    },

    InputStyle: {
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

    containerDateStyle: {
        flexDirection: 'row',
        marginTop: 15
    },

    TextDateStyle: {
        color: 'black',
        paddingTop: 10,
        paddingLeft: 20,
    },

    containerInfoStyle: {
        flexDirection: 'row',
        backgroundColor: 'silver',
        marginTop: 10
    },

    InformationStyle: {
        color: 'black',
        paddingTop: 15,
        paddingLeft: 20,
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

    SaveStyle: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    }
};

const mapStateToProps = (state) => {
    const { inform, nominal, date } = state.Income;

    return { inform, nominal, date };
};

export default connect(mapStateToProps, { 
    IncomeChanged, 
    SaveIncomeSuccess,
    UpdateIncome })(IncomePage);
