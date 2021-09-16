import classes from './Posts.module.css';

export const Post = (props) => {
    return (
        <div>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.body}>{props.body}</div>
        </div>
    )
}

export default Post;