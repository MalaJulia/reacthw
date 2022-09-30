import {TodoApi} from "../todo.api/todo.api";
function Todoes (props){
    const {user} = props
    return (
        <div>
            <h3>{user.title} {user.id} </h3>
        </div>
    );
}
export default Todoes;