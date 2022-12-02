import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";




type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts = (props:MyPostsPropsType) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likesCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;