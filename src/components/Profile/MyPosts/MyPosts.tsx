import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
               <Post message='Hi, how are you?' likes={15}/>
               <Post message='This my first post' likes={22}/>
            </div>
        </div>
    )
}

export default MyPosts;