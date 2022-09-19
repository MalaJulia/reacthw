import {useEffect, useState} from "react";
import {getShipAxios} from "./api.ships";
import Launching from "./Luunching";
function Ships(){
    let [ships, setShips] = useState([]);
    useEffect(()=>{
        getShipAxios().then(value=> setShips(value.data.filter(value => value.launch_year !== "2020")))
    },[])
    return (
        <div>
            {
                ships.map((ship, index ) => (<Launching  ship={ship} key={ship.id} />))
            }
        </div>)
}

export default Ships

