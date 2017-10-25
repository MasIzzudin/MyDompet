import {
    EMAIL_CHANGED,
    PASS_CHANGED,
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    APP_CLOSED
} from '../Actions/type';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: '',
    loggedIn: false
};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASS_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            return INITIAL_STATE;
        case LOGIN_FAILED:
            return { ...state, password: '', error: 'Authentication Failed', loading: false };
        case APP_CLOSED:
            if (action.payload) {
                console.log(action.payload);
                return { ...state, loggedIn: true };
            }
            return { ...state, loggedIn: false };
        default:
            return state;
    }
};

