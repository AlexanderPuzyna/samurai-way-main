import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {MyPostsPropsType} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type PostsType = {
    posts: Array<PostType>
}
export type ProfilePageType = {
    profilePage: any
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}


type AppPropsType = {
    // dialogs: Array<Dialogs>
    // posts: Array<PostType>
    // messages: Array<MessagesType>
    state:any
}

const App = (props:AppPropsType) => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route  path='/dialogs'
                        render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route  path='/profile'
                        render={() => <Profile state={props.state.profilePage}/>}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
