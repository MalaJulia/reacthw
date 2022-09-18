function User (props){
    const {user, lift} = props
    return (
            <div>
                <h3>{user.name} {user.id} </h3>
                <button onClick={() =>{
                    lift('Phone' + " " + user.phone)
                }}>PHONE</button>
            </div>
                );
                }
export default User;