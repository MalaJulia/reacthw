import {Outlet} from "react-router-dom";


function Post (props){
    const {post} = props
    return (
        <div>

            <h3>{post.title} {post.id} </h3>

        </div>
    );
}
export default Post;