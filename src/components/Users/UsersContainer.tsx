import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";


type mapStateToPropsType ={
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId:number) => void
    setUsers: (users:Array<UserType>) => void
}

export type UsersContainerType = mapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch ) => {
    return {
        follow: (userId: number) => {
             dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }

    }
}


const  UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;