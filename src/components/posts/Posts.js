import {useDispatch, useSelector} from "react-redux";
import {LOAD_POSTS} from "../../redux";
import {useEffect} from "react";

import {PostsService} from "../../service";

import {Post} from "../post/Post";

const Posts = () => {
    const {posts} = useSelector(state => state.postsReduser)
    const dispatch = useDispatch()

    useEffect(() => {
        PostsService.getAll().then(({data}) => dispatch({type: LOAD_POSTS, payload: data}))
    }, [])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}
export {Posts}