import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const Spinner = ({ size }) => {
    return(
        <View style={styles.SpinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    SpinnerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5
    }
};