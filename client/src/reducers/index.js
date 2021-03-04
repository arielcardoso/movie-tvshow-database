import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import mylistReducer from './mylist.reducer';

export default combineReducers({
    auth: authReducer,
    mylist: mylistReducer
});