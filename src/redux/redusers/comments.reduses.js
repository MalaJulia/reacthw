import {LOAD_COMMENTS} from "../actions/action";


const commentsReduser = (state = {comments:[], comment: null}, action) => {
    const {type, payload} = action

    switch (type) {
        case LOAD_COMMENTS:
            return {...state, comment: payload }

        default:
            return state
    }
}
export {
    commentsReduser
}