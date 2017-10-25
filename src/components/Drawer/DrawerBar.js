import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { logOutSuccess } from '../../Actions';
import Content from './DrawerComponent/Content';
import Profile from './DrawerComponent/Profile';

class DrawerBar extends Component {

    onPressLogOut() {
        const { email, password } = this.props;
        this.props.logOutSuccess({ email, password });
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#edf0f4' }}>
                <Profile />
                <Content 
                    onLogout={this.onPressLogOut.bind(this)} 
                    onPressList={() => Actions.income()}
                    onPressHome={() => Actions.drawer()}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { email, password } = state.Auth;

    return { email, password };
};

export default connect(mapStateToProps, { logOutSuccess })(DrawerBar);
