import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CommentsPage, PostsPage, SingleUsersPage, UsersPage} from "./pages";



const App =  () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'users/:id'} element={<SingleUsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>


            </Route>
        </Routes>
    )

}
export {App}