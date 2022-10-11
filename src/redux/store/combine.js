import {combineReducers} from "redux";


import {commentsReduser} from "../redusers/comments.reduses";
import {postsReduser} from "../redusers/posts.reduser";
import {usersReduser} from "../redusers/users.reduser";

const reduser = combineReducers({
    commentsReduser,
    postsReduser,
    usersReduser

})

export {reduser}