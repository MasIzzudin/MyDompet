import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    PASS_CHANGED,
    SIGN_SUCCESS,
    SIGN_USER,
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SIGN_FAILED,
    SIGNOUT_SUCCESS,
    APP_CLOSED
} from './type';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const usernameChanged = (text) => {
    return {
        type: USERNAME_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const passChanged = (text) => {
    return {
        type: PASS_CHANGED,
        payload: text
    };
};

export const signUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGN_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => userSignSuccess(dispatch, user))
        .catch(() => userSignFailed(dispatch));
    };
};

const userSignSuccess = (dispatch, user) => {
    dispatch({ type: SIGN_SUCCESS, payload: user });
};

const userSignFailed = (dispatch) => {
    dispatch({ type: SIGN_FAILED });
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFailed(dispatch));
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_SUCCESS, payload: user });

    Actions.drawer();
};

const loginUserFailed = (dispatch) => {
    dispatch({ type: LOGIN_FAILED });
};

export const logOutSuccess = () => {
    return (dispatch) => {
        firebase.auth().signOut()
        .then(() => signOutUser(dispatch));
    };
};

const signOutUser = (dispatch) => {
    dispatch({ type: SIGNOUT_SUCCESS });

    Actions.main({ type: 'reset' });
};

export const AppClose = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch({ type: APP_CLOSED, payload: user });
            }
        });
    };
};

