import classes from '../albums//Gallery.module.css';

export const Images = (props) => {
  return (
    <div className={classes.imageWrapper}>
        <div className={classes.imageTitle}>{props.title}</div>
        <img href="#" src={props.url} alt={props.title}/>
    </div>
  );
};

export default Images;