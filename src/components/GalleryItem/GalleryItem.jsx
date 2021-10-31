import axios from "axios";
import {useState} from "react";

function GalleryItem(props){
    const[display, setDisplay]=useState(true);

    const toggleDisplay=()=>{
        setDisplay(!display);
    }
    const addLike=()=>{
        console.log(`in addLike`);
    }

    //const[name, setName] = useState(null);
    return(
        <div>
            {
                display ?
                <img onClick={toggleDisplay} src={props.image.path} alt={props.image.description} /> :
                <p onClick={toggleDisplay} >{props.image.description}</p>
            }
            <p>{props.image.likes}</p>
            <button onClick={addLike}>like</button>
        </div>
    )
}

export default GalleryItem;