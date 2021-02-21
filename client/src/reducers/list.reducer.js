import { FETCH_LIST } from '../actions/types';

const initState = {
    titleList: []
};

const listReducer = (state = [initState], action) => {
    switch (action.type) {
        case FETCH_LIST:
            return{
                titleList: action.payload
            }
        default:
            return state;
    }
};

export default listReducer;