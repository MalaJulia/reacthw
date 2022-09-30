import {useEffect, useState} from "react";
import Post from "./Post";
import {useParams} from "react-router-dom";
import post from "./Post";
function PostApi(){
    // console.log('PostApi create')
    const {id}=useParams()
    let [posts, setPost] = useState([null])
    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/posts/'+ id )
            .then(value => value.json())
            .then(value => {
                setPost(value)
                // console.log(value, 'fsf')
            })
    }, [id])
    return (
        <div>
            {post && <Post post={posts}/>}
            {/*{posts.map(post => (<Post post={post} key={post.id}/>))}*/}
        </div>
    )
}
export default PostApi