import {
    INCOME_CHANGED,
    SAVE_INCOME_SUCCESS
} from '../Actions/type';

const INITIAL_STATE = {
    date: '',
    inform: '',
    nominal: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCOME_CHANGED:
            return { ...state, [action.payload.clan]: action.payload.value };
        case SAVE_INCOME_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
