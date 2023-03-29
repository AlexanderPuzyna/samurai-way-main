import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType, StoreType} from "./redux/store";
import {ActionsTypes} from "./redux/dialogs-reducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";




const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}/>
                <Route path='/profile'
                       render={() => <Profile />}
                />
            </div>
        </div>

    );
}

export default App;
