import React from 'react';
import './index.css';
import store, {RootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter><App state={store.getState()} addPost={store.addPost.bind(store)}
                            updateNewPostText={store.updateNewPostText.bind(store)}/></BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree();

store.subscribe(rerenderEntireTree);