function Album (props){
    const {album} = props
    return (
        <div>
            <h3>{album.title} {album.id} </h3>
        </div>
    );
}
export default Album;