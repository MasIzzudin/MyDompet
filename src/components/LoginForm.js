import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { emailChanged, passChanged, loginUser, AppClose } from '../Actions';
import { Card, Input, Button, CardSection, Spinner } from './common';
import gambar from './image/money.jpg';

class LoginForm extends Component {
    componentWillMount() {
        this.props.AppClose();
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passChanged(text);
    }

    onPressLogin() {
        const { email, password } = this.props;
            this.props.loginUser({ email, password });
    }

    onPressButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onClick={this.onPressLogin.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        const { 
            WrapStyle,
            TextStyle,
            LinkStyle,
            errorTextStyle,
            parentWrapStyle
        } = Style;

        return (
            <ImageBackground source={gambar} style={{ flex: 1 }}>
                <View style={parentWrapStyle}>
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

                        <Text style={errorTextStyle}>{this.props.error}</Text>
                    </Card>

                    <CardSection>
                        {this.onPressButton()}
                    </CardSection>
                   

                    <View style={WrapStyle}>
                        <Text style={TextStyle}>Have no Account?
                        <Text onPress={() => Actions.signForm()} style={LinkStyle}>
                        Create Account</Text>
                        </Text> 
                    </View>
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
    WrapStyle: {
        marginTop: 10
    },

    TextStyle: {
        textAlign: 'center',
        color: 'white'
    },

    LinkStyle: {
        color: 'blue'
    },
    
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = (state) => {
    const { email, password, loading, error, loggedIn } = state.Auth;

    return { email, password, loading, error, loggedIn };
};

export default connect(mapStateToProps, { 
    emailChanged, passChanged, loginUser, AppClose })(LoginForm);
