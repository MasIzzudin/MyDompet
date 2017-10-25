import { VALUE_INCOME } from '../Actions/type';

const INITIAL_STATE = {}; //Main State untuk List

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VALUE_INCOME:
            return action.payload;
        default:
            return state;
    }
};
