import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

const Date = ({ onDateChange, date }) => {
        return (
            <View>
                <DatePicker 
                    style={{ marginLeft: 150 }}
                    date={date}
                    mode='date'
                    format='MM/DD/YYYY'
                    minDate='01-01-2000'
                    maxDate='31-12-2025'
                    showIcon={false}
                    TouchableComponent={TouchableOpacity}
                    customStyles={{
                        dateInput: {
                            alignItems: 'center',
                            padding: 5,
                            position: 'absolute'
                        },
                    }}
                    onDateChange={onDateChange}
                />
            </View>
        );
};

export default Date;
