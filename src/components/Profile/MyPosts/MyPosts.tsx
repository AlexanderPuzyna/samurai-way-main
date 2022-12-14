import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText:string
    addPost: () => void
    updateNewPostText: (newText: string) => void

}

const MyPosts = (props:MyPostsPropsType) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
            props.addPost();
    };

    let onPostChange = () => {
        if (newPostElement.current){
            props.updateNewPostText(newPostElement.current.value);
        }
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;