import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'/>
                <div/>
                <div><img src='a'/> ava + description</div>
 <MyPosts/>
            </div>
        </div>
    )
}
export default Profile