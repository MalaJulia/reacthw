import {useDispatch, useSelector} from "react-redux";
import {LOAD_USERS, usersReduser} from "../../redux";
import {useEffect} from "react";

import {UsersService} from "../../service";
import {User} from "../User/User";

const Users = () => {
    const {users} = useSelector(state => state.usersReduser)
    const dispatch = useDispatch()

    useEffect(() => {
        UsersService.getAll().then(({data}) => dispatch({type: LOAD_USERS, payload: data}))
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}
export {Users}