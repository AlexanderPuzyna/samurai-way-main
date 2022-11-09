import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://www.websitegrowth.com/wp-content/uploads/2016/08/apple-logo-300x300.png'/>
            </header>
            <nav className='nav'>
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
                <div><a href="#">Settings</a></div>

            </nav>
            <div className='content'>
                <div>
                    <img src='https://www.ukinbound.org/wp-content/uploads/2020/07/We-Are-Tourism-BCP-875x350.jpg'/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>post1</div>
                        <div>post2</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
