import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import SignReducers from './SignReducers';
import IncomeReducers from './IncomeReducer';
import OutlayReducers from './OutlayReducers';
import IncomeValReducer from './IncomeValReducer';
import ProfileReducers from './ProfileReducers';

export default combineReducers({
    Auth: AuthReducers,
    Sign: SignReducers,
    Income: IncomeReducers,
    outlay: OutlayReducers,
    IncomeVal: IncomeValReducer,
    profile: ProfileReducers
});
