import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, RootStateType, StoreType} from "../../redux/store";
import {ActionsTypes} from "../../redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";






const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;