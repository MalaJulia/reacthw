function SimpsonsChar (props){
    const {simpson} = props
    return (
            <div>
                    <h1>{simpson.name} {simpson.surname} </h1>
                    <div>Age {simpson.age}</div>
                    <div>{simpson.info}</div>
                    <img src={simpson.photo} alt='Photo Simpson'/>
            </div>
                );
                }
export default SimpsonsChar;