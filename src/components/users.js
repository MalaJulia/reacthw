import {useEffect, useState} from "react";
import User from "./User";

function Users(){
    let [users, setUser] = useState([])
    let [person, setPerson] = useState(null)
    const lift =(obj) => {
        setPerson(obj)
        console.log(lift, 'xsfvsd')
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUser(value)
                console.log(value, 'iiiiii')
            })
    }, [])
    return (

        <div>
            <hr/>
                {JSON.stringify(person)}
            <hr/>
            {
                users.map((user, index ) => (<User user={user} key={user.id} lift={lift}/>))
            }
        </div>
    )
}

export default Users