import {Link, Outlet, useNavigate} from "react-router-dom";
import post from "../../usersPost/Post";
function Comments (props){
    const {comment} = props

    let navigation = useNavigate()
    return (
        <div>
            <Outlet/>
            <h3>{comment.name} {comment.id} </h3>
            <button onClick={()=>{
                console.log('one tap')
                navigation(comment.id.toString(), {state:{...comment}})
            }}>{comment.name}</button>
            {/*<span> <Link to={comment.id.toString()}> details</Link></span>*/}


        </div>
    );
}
export default Comments;