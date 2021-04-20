import { POST_RESET_PASSWORD } from '../constants/types.js';

const getResetPasswordData = (state, action) => {
    switch (action.type) {
        case POST_RESET_PASSWORD:
            return {
                resetPasswordData: action.resetPasswordData
            };
        default:
            return state;
    }
}

const resetPassword = (state = [], action) => {
    switch (action.type) {
        case POST_RESET_PASSWORD:
            return [...state, getResetPasswordData(undefined, action)];
        default:
            return state;
    }
};


export default resetPassword;