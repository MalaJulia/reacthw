import {Link} from "react-router-dom";

const Headers = () => {
    return(
        <div>
            <div><Link to={'/'}>Main</Link></div>
            <div><Link to={'users'}>User</Link></div>
            <div><Link to={'posts'}>Posts</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
        </div>
    )
}
export {Headers}