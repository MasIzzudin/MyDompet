import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import gambar from '../../image/design.jpg';
import { ImageProfile } from '../../../Actions';

class Profile extends Component {
    showImageLibrary() {
        this.props.ImageProfile();
    }

    render() {
        const { wrapperImageSource, wrapperAccount, ImageStyle } = Style;
        return (
            <ImageBackground 
                source={gambar} style={{ 
                    height: 160, 
                    shadowColor: 'black', 
                    shadowOffset: { width: 10, height: 5 }, 
                    shadowOpacity: 1,
                    elevation: 1 }}
            >
                <View style={wrapperAccount} >
                    <TouchableOpacity 
                    onPress={this.showImageLibrary.bind(this)}
                    >
                        <View style={wrapperImageSource} > 
                            {
                                this.props.avatarSource === null ? <Text>Choose Your Avatar</Text> :
                                <Image source={this.props.avatarSource} style={ImageStyle} />
                            }
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const Style = {
    wrapperAccount: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    wrapperImageSource: {
        backgroundColor: 'white',
        borderRadius: 100,
        borderColor: '#9B9B9B',
        marginTop: 10,
        width: 130,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },

    ImageStyle: {
        width: 130,
        height: 130,
        borderRadius: 100
    }
};

const mapStateToProps = state => {
    const { avatarSource } = state.profile;
    console.log(avatarSource);
    return { avatarSource };
};

export default connect(mapStateToProps, { ImageProfile })(Profile);
