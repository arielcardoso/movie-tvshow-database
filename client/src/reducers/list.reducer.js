import { FETCH_LIST } from '../actions/types';

const initialState = {
    titleList: []
};

const listReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_LIST:
            return{
                titleList: payload
            }
        default:
            return state;
    }
};

export default listReducer;