import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
}



const App = (props:AppPropsType) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route  path='/dialogs'
                        render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route  path='/profile'
                        render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
            </div>
        </div>

    );
}

export default App;
