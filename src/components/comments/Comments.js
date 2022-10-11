import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import {LOAD_COMMENTS} from "../../redux";
import {CommentsService} from "../../service";
import {Comment} from "../comment/Comment";


const Comments = () => {

    const {comments} = useSelector(state => state.commentsReduser)

    const dispatch = useDispatch();

    useEffect(() => {
        CommentsService.getAll().then(({data}) => dispatch({type: LOAD_COMMENTS, payload: data}))
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
}
export {Comments}