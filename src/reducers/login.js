import { POST_LOGIN } from '../constants/types.js';

const getLoginData = (state, action) => {
    switch (action.type) {
        case POST_LOGIN:
            return {
                loginData: action.loginData
            };
        default:
            return state;
    }
}

const login = (state = [], action) => {
    switch (action.type) {
        case POST_LOGIN:
            return [...state, getLoginData(undefined, action)];
        default:
            return state;
    }
};


export default login;