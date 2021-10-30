import {useState} from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(props){
    //const[name, setName] = useState(null);
    return(
        <div>
            {props.images.map( image=>( <GalleryItem image={image} getImages={props.getImages}/>))}
        </div>
    )
}

export default GalleryList;