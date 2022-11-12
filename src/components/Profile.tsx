import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://www.ukinbound.org/wp-content/uploads/2020/07/We-Are-Tourism-BCP-875x350.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>post1</div>
                    <div className='item'>post2</div>
                </div>
            </div>

        </div>
    )
}

export default Profile;