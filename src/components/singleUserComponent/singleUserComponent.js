import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {usersReduser} from "../../redux";

import {LOAD_SINGLE_USERS} from "../../redux";

import {singleUserDetails} from "../singleUserDetails/singleUserDetails";

const SingleUserComponent = () => {

    const {user} = useSelector(state => state.usersReduser)

    const dispatch = useDispatch

    const {id} = useParams()

    useEffect(()=> {
      dispatch({type: LOAD_SINGLE_USERS, payload: +id})},
        [id])
    return (
        <div>
            {
                user && (<singleUserDetails user = {user}/>)
            }
        </div>
    )
}
export {SingleUserComponent}