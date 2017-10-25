import { IMAGE_PROFILE } from '../Actions/type';

const INITIAL_STATE = {
    avatarSource: null
};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IMAGE_PROFILE:
            console.log(action);
            return { ...state, avatarSource: action.payload };
        default:
            return state;
    }
};
