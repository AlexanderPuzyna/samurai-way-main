import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {PostType, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {

    store: StoreType
}


const MyPostsContainer = (props:MyPostsPropsType) => {
    let state = props.store.getState();

    let addPost = () => {
            props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text: string) => {
            props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;