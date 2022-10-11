import {LOAD_SINGLE_USERS, LOAD_USERS} from "../actions/action";

const usersReduser = (state = {users:[], user: null}, action) => {
    const {type, payload} = action

    switch (type) {
        case LOAD_USERS:
            return {...state, users: payload }

        case LOAD_SINGLE_USERS:
       const user = state.users.find(user => user.id === payload)
            return {...state,user}

        default:
            return state
    }
}
export {
    usersReduser
}