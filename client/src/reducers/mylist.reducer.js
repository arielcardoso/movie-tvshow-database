import { FETCH_MYLIST } from '../actions/types';

const initialState = {
    myList: []
};

const mylistReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_MYLIST:
            return{
              myList: payload
            }
        default:
            return state;
    }
};

export default mylistReducer;