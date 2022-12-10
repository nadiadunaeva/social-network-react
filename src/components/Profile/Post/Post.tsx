import React from "react";
import classes from './Post.module.css';


type MessagePropType={
    message: string
    likesCount: string
}

const Post = (props: MessagePropType) => {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img src='https://st2.depositphotos.com/1000877/6724/i/950/depositphotos_67244621-stock-photo-cat-sleeping.jpg'></img>
                {props.message}</div>
            <div>like {props.likesCount}</div>
        </div>


    )
}
export default Post