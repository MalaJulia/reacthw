import {useEffect, useState} from "react";
import Album from "./album";
function AlbumsApi(){
    let [albums, setAlbum] = useState([])
    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(value => {
                setAlbum(value)
                console.log(value)
            })
    }, [])
    return (
        <div>
            {
                albums.map(album => (<Album album={album} key={album.id}/>))
            }
        </div>
    )
}
export default AlbumsApi