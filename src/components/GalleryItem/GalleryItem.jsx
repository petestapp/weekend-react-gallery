import {useState} from "react";

function GalleryItem(props){
    //const[name, setName] = useState(null);
    return(
        <div>
            <p>{props.image.path}</p>
            <p>{props.image.description}</p>
            <p>{props.image.likes}</p>
        </div>
    )
}

export default GalleryItem;