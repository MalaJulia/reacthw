import {LOAD_POSTS} from "../actions/action";

const postsReduser = (state = {posts:[], post: null}, action) => {
    const {type, payload} = action

    switch (type) {
        case LOAD_POSTS:
            return {...state, posts: payload }

        default:
            return state
    }
}
export {
    postsReduser
}