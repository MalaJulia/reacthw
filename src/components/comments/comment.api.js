import {useEffect, useState} from "react";
import Comments from "./Comments";
function CommentApi(){
    let [comments, setComment] = useState([])
    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComment(value)
                console.log(value)
            })
    }, [])
    return (
        <div>
            {
                comments.map(comment => (<Comments comment={comment} key={comment.id}/>))
            }
        </div>
    )
}
export default CommentApi