import {useState} from "react";
import Personage from "./person";
import app from "../App";

function Characters(){
    let [users, setPerson] = useState([])
    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setPerson(value.results.slice(4,10))
            console.log(value.results)})
    return (
        <div>
            {
                users.map(person => (<Personage person={person} key={person.id}/>))
            }
        </div>
    )
}

export default Characters