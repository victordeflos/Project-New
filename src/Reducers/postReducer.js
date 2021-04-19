import {
    GET_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    GET_POSTS,
} from '../Actions/types';

const initialState = {
    posts: [],
    post: null
};
const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
            };

        case CREATE_POST:
            console.log(payload);
            return {
                ...state,
                posts: [payload, ...state.posts],
            };

        // now server got the post
        case GET_POST:
            return {
                ...state,
                post: payload,
            };
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map((postItem) =>
                    postItem.id === payload.id ? payload : postItem
                ),
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((postItem) => postItem.id !== payload),
            };
        default:
            return state;
    }
};

export default reducer;
