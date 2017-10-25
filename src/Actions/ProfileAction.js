import ImagePicker from 'react-native-image-picker';
import { IMAGE_PROFILE } from './type';


export const ImageProfile = () => {
    return (dispatch) => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
              skipBackup: true,
            }
          };
    
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                dispatch({ type: IMAGE_PROFILE, payload: source });
            }
          });
    };    
};
