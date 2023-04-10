import React from "react";
import {UserType} from "../../redux/users-reducer";
import styles from './users.module.css'
import {UsersContainerType} from "./UsersContainer";

const Users = (props: UsersContainerType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://i1.sndcdn.com/avatars-29mD5eFjkODpaVi2-KAd2oA-t500x500.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://i1.sndcdn.com/avatars-29mD5eFjkODpaVi2-KAd2oA-t500x500.jpg',
                followed: true,
                fullName: 'Alex',
                status: 'I libe for the energy',
                location: {city: 'SVT', country: 'USA'}
            },
            {
                id: 3,
                photoUrl: 'https://i1.sndcdn.com/avatars-29mD5eFjkODpaVi2-KAd2oA-t500x500.jpg',
                followed: false,
                fullName: 'Yana',
                status: 'Nice!',
                location: {city: 'Gomel', country: 'Russia'}
            },
        ])
    }
    return<div>
        {props.users.map(u =><div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={ ()=> {props.follow(u.id)}}>Follow</button> }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>{u.status}<div></div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
        }
        </div>

}

export default Users;