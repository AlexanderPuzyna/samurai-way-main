import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


// addPost('HELLO');


ReactDOM.render(<BrowserRouter><App state={state} addPost={addPost}/></BrowserRouter>, document.getElementById('root'));