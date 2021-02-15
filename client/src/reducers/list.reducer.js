import { FETCH_LISTS } from '../actions/types';

const initialState = {
    list: []
};

const listReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_LISTS:
            return{
                list: payload
            }
    
        default:
            return state;
    }
};

export default listReducer;