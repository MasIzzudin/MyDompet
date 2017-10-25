import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, ImageBackground, View } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged, signUser } from '../Actions';
import { Card, Input, Button, CardSection, Spinner, Popup } from './common';
import gambar from './image/money.jpg';

class SignUpForm extends Component {
    onEmailChange(text) {
        this.props.usernameChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onPressSign() {
        const { email, password } = this.props;
        this.props.signUser({ email, password });
        this.setState({ showModal: true });
    }

    onHandlePress() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }

        return (
            <Button onClick={this.onPressSign.bind(this)}>
                Sign Up
            </Button>
        );
    }

    onAccept() {
        Actions.auth({ type: 'reset' });
        this.setState({ showModal: false });
    }

    render() {
        return (
            <ImageBackground source={gambar} style={{ flex: 1 }}>
                <View style={Style.parentWrapStyle}>
                    <Card>
                        <CardSection>
                            <Input 
                                placeholder="email@email.com"
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.props.email}
                            />
                        </CardSection>
                        <View 
                            style={{ 
                                borderBottomColor: 'grey', 
                                borderBottomWidth: 1,
                                width: 320, 
                                alignSelf: 'center' }} 
                        />
                        <CardSection>
                            <Input 
                                placeholder="password"
                                secureTextEntry
                                onChangeText={this.onPasswordChange.bind(this)}
                                value={this.props.password}
                            />
                        </CardSection>

                        <Text style={Style.errorTextStyle}>{this.props.error}</Text>
                    </Card>

                        <CardSection>
                            {this.onHandlePress()}
                        </CardSection>

                        <Popup
                            visible={this.props.showModal}
                            onAccept={this.onAccept.bind(this)}
                        >
                            Your Account was Successfully created!!
                            Please Login Again :) 
                        </Popup>
                </View>
            </ImageBackground>
        );
    }
}

const Style = {
    parentWrapStyle: {
        flex: 1,
        backgroundColor: 'rgba(255,215,0,0.5)',
        justifyContent: 'center'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = (state) => {
    const { email, password, loading, error, showModal } = state.Sign;

    return { email, password, loading, error, showModal };
};

export default connect(mapStateToProps, { 
    usernameChanged,
    passwordChanged,
    signUser })(SignUpForm);
