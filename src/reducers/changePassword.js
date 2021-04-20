import { POST_CHANGE_PASSWORD } from '../constants/types.js';

const getChangePasswordData = (state, action) => {
    switch (action.type) {
        case POST_CHANGE_PASSWORD:
            return {
                changePasswordData: action.changePasswordData
            };
        default:
            return state;
    }
}

const changePassword = (state = [], action) => {
    switch (action.type) {
        case POST_CHANGE_PASSWORD:
            return [...state, getChangePasswordData(undefined, action)];
        default:
            return state;
    }
};


export default changePassword;