import Todos from "../todo/todos";
import Todoes from "../todo/Todoes";
import {useEffect, useState} from "react";
function TodoApi(){
    let [users, setUser] = useState([])
    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(value => {
                setUser(value)
                console.log(value)
            })
    }, [])
    return (
        <div>
            {
                users.map(user => (<Todoes user={user} key={user.id}/>))
            }
        </div>
    )
}
export {TodoApi}