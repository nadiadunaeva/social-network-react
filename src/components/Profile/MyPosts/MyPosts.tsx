import React from "react";
import classes from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = () => {

    return (
        <div className={classes.postsBlock}>my posts
            <h3>My posts </h3>
            <div>
                <div><textarea>New post</textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={classes.posts}>
            <Post message="Hi,how are you?" likesCount="2"/>
            <Post message="It's my first post!" likesCount="15"/>
        </div>
</div>
    )
}
export default MyPosts