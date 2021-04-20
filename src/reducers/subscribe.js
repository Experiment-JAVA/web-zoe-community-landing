import { SUBSCRIBE } from '../constants/types.js';

const getEmail = (state, action) => {
    switch (action.type) {
        case SUBSCRIBE:
            return {
                email: action.email
            };
        default:
            return state;
    }
}

const subscribe = (state = [], action) => {
    switch (action.type) {
        case SUBSCRIBE:
            return [...state, getEmail(undefined, action)];
        default:
            return state;
    }
};


export default subscribe;