//import { useEffect } from "react";
import { Album } from './Album';
import { Images } from '../images/Images';
import classes from './Gallery.module.css';

const Albums = (props) => {

    return (
        <ul>
            {props.albums.map((album) => (
                <div className={classes.albumWrapper}>
                    <Album title={album.title} key={album.id} />
                    <div className={classes.imagesWrapper}>
                        {props.images.map((img) => album.id === img.albumId ? (<Images title={img.title} url={img.url} thumbnailUrl={img.thumbnailUrl} key={img.id}/>) : '')}
                    </div>
                </div>
            ))}
        </ul>
    );
};

export default Albums;