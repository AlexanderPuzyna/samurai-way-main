import React from "react";
import {UserType} from "../../redux/users-reducer";
import styles from './users.module.css'
import {UsersContainerType} from "./UsersContainer";
import  axios from "axios";
import userPhoto from '../../assets/images/user.png'

const Users = (props: UsersContainerType) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });


    }
    return<div>
        {props.users.map(u =><div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={ ()=> {props.follow(u.id)}}>Follow</button> }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>{u.status}<div></div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>)
        }
        </div>

}

export default Users;