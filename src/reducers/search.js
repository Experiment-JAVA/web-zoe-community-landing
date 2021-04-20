import { GET_SEARCH } from '../constants/types.js';

const getSearchData = (state, action) => {
    switch (action.type) {
        case GET_SEARCH:
            return {
                searchData: action.searchData
            };
        default:
            return state;
    }
}

const search = (state = [], action) => {
    switch (action.type) {
        case GET_SEARCH:
            return [...state, getSearchData(undefined, action)];
        default:
            return state;
    }
};


export default search;