import {
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    SIGN_USER,
    SIGN_SUCCESS,
    SIGN_FAILED,
    SIGNOUT_SUCCESS
} from '../Actions/type';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: '',
    showModal: false
};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case SIGN_USER:
            return { ...state, loading: true };
        case SIGN_SUCCESS:
            return { ...state, 
                loading: false, 
                email: '', 
                password: '',
                showModal: true
            };
        case SIGN_FAILED:
            return { ...state, 
                loading: false, 
                error: 'Failed! maybe email already exist', 
                showModal: false 
            };
        case SIGNOUT_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};

