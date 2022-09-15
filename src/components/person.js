// import Characters from "./character";
import app from "../App";

 function Personage (props) {
    let {person} = props
    return (<div className={'component'}>
        <h3>{person.id}</h3>
        <h3 className={'name'}>{person.name}</h3>
        <div>{person.status}</div>
        <div>{person.species}</div>
        <div>{person.gender}</div>
        <img src={person.image} alt="Character"/>

    </div>)
}

export default Personage;
// id,name,status,species,gender,image