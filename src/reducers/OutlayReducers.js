import { 
    OUTLAY_CHANGED
} from '../Actions/type';

const INITIAL_STATE = {
    date: '',
    picker: '',
    inform: '',
    nominal: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OUTLAY_CHANGED:
            return { ...state, [action.payload.clan]: action.payload.value };
        default:
            return state;
    }
};
