import classes from '../posts/Posts.module.css';

export const Comments = (props) => {
  return (
    <div className={classes.wrapper}>
        <div className={classes.title}>{props.name}</div>
        <div className={classes.email}>{props.email}</div>
        <div className={classes.body}>{props.body}</div>
    </div>
  );
};

export default Comments;