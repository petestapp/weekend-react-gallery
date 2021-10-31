import axios from "axios";
import {useState} from "react";

function GalleryItem(props){
    const[display, setDisplay]=useState(true);

    const toggleDisplay=()=>{
        setDisplay(!display);
    }
    const addLike=()=>{
        axios.put(`/gallery/like/${props.image.id}`).then((response)=>{
            props.getImages();
        }).catch((err=>{
            console.log(err);
            alert('error adding like');
        }))
    }

    //const[name, setName] = useState(null);
    return(
        <div className="cell">
            {
                display ?
                <img onClick={toggleDisplay} src={props.image.path} alt={props.image.description} /> :
                <p onClick={toggleDisplay} >{props.image.description}</p>
            }
            <p>Likes: {props.image.likes}</p>
            <button onClick={addLike}>like</button>
        </div>
    )
}

export default GalleryItem;