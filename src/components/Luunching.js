function Launching (props){
    const {ship} = props
    return (
            <div>
                <h2>{ship.mission_name}</h2>
                <p>{ship.launch_year}</p>
            <img src={ship.links.mission_patch_small} alt={ship.mission_name}/>
            </div>
                );
                }
                export default Launching