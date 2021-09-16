import classes from './Gallery.module.css';

export const Album = (props) => {
    return (
        <div>
            <div className={classes.albumTitle}>{props.title}</div>
        </div>
    )
}

export default Album;