import React from 'react';
import loader from "../../../assets/images/preloader.gif";



let Preloader = () => {
    return (
        <div>
            <img src={loader}/>
        </div>
    );
};

export default Preloader;