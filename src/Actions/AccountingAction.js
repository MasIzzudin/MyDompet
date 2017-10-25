import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    INCOME_CHANGED,
    OUTLAY_CHANGED,
    SAVE_INCOME_SUCCESS,
    VALUE_INCOME
} from './type';

export const IncomeChanged = ({ clan, value }) => {
    return {
        type: INCOME_CHANGED,
        payload: { clan, value }
    };
};

export const OutlayChanged = ({ clan, value }) => {
    return {
        type: OUTLAY_CHANGED,
        payload: { clan, value }
    };
};

export const SaveIncomeSuccess = ({ date, inform, nominal }) => {
    const { currentUser } = firebase.auth();

return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/Income`)
    .push({ date, inform, nominal })
        .then(() => {
            dispatch({ type: SAVE_INCOME_SUCCESS });
            
            Actions.homePath();
        });
    };
};

export const ValueIncome = () => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Income`)
        .on('value', snapshot => {
            dispatch({ type: VALUE_INCOME, payload: snapshot.val() });
            });
    };   
};

export const UpdateIncome = ({ date, inform, nominal }) => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Income`)
        .set({ date, inform, nominal })
            .then(() => {
                dispatch({ type: SAVE_INCOME_SUCCESS });
                
                Actions.homePath();
            });
        };
};
