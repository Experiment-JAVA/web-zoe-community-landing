import { POST_SIGNUP } from '../constants/types.js';

const getSignUpData = (state, action) => {
    switch (action.type) {
        case POST_SIGNUP:
            return {
                signUpData: action.signUpData
            };
        default:
            return state;
    }
}

const signUp = (state = [], action) => {
    switch (action.type) {
        case POST_SIGNUP:
            return [...state, getSignUpData(undefined, action)];
        default:
            return state;
    }
};


export default signUp;