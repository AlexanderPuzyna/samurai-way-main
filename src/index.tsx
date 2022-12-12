import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, RootStateType, updateNewPostText} from "./redux/state";


 let rerenderEntireTree = (/*state: RootStateType*/) => {
    ReactDOM.render(
        <BrowserRouter><App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/></BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree();

 subscribe(rerenderEntireTree);