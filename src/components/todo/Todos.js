import {TodoApi} from "../todo.api/todo.api";
import Todoes from "./Todoes";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom"
import AlbumsApi from "../albums/albums.api";
import CommentApi from "../comments/comment.api";
import PostApi from "../../usersPost/post.api";
import Post from "../../usersPost/Post";
function Todos(){
    return(
    <div>
        <ul>
    <li><Link to={'/todo'}>Todoes</Link></li>
            <li><Link to={'/album'}>Albums</Link></li>
            <li><Link to={'/comment'}>Comments</Link></li>
            {/*<li><Link> to={'/post'} </Link></li>*/}
        </ul>



        <Routes>
{/*<Route index element={<Home/>}/>*/}
            <Route path={'todo'} element={<TodoApi/>}/>
            <Route path={'album'} element={<AlbumsApi/>}/>
            {/*<Route path={'comment/:id'} element={<PostApi/>}/>*/}
            <Route path={'comment'} element={<CommentApi/>}>
                <Route path={':id'} element={<PostApi/>}/>
            </Route>
        </Routes>

</div>
    )}
export default Todos