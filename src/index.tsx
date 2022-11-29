import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'This my first post',likesCount: 22}
]

let dialogs = [
    {id: 1, name: 'Alexander'},
    {id: 2, name: 'Maxim'},
    {id: 3, name: 'Alexandra'},
    {id: 4, name: 'Yana'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'What are you doing?'},
    {id: 3, message: 'Nice!'},
    {id: 4, message: 'Ok'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));