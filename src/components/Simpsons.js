import {simpsons} from "./users";
import SimpsonsChar from "./Simpson";
function Char (props){
    return (
        <div>{
            simpsons.map((simpson, index) => <SimpsonsChar key = {index} simpson = {simpson}/>)
        }
        </div>
    )
}

console.log(simpsons.map,'dsadfwef')
export default Char;