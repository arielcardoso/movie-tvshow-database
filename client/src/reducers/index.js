import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import listReducer from './list.reducer';

export default combineReducers({
    auth: authReducer,
    lists: listReducer
});