//import { useEffect } from "react";
import { Post } from './Post';
import { Comments } from '../comments/Comments';
import classes from './Posts.module.css';

const Posts = (props) => {

    return (
        <ul>
            {props.posts.map((post) => (
                <div className={classes.postWrapper}>
                    <Post title={post.title} body={post.body} key={post.id} />
                    <div className={classes.commentsWrapper}>
                        {props.comments.map((comm) => post.id === comm.postId ? (<Comments name={comm.name} email={comm.email} body={comm.body} key={comm.id}/>) : '')}
                    </div>
                </div>
            ))}
        </ul>
    );
};

export default Posts;