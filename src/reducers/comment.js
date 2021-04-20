import { POST_COMMENT } from '../constants/types.js';

const getCommentData = (state, action) => {
    switch (action.type) {
        case POST_COMMENT:
            return {
                commentData: action.commentData
            };
        default:
            return state;
    }
}

const comment = (state = [], action) => {
    switch (action.type) {
        case POST_COMMENT:
            return [...state, getCommentData(undefined, action)];
        default:
            return state;
    }
};


export default comment;