import React from "react";
import s from './Post.module.css';

type PropsType = {
    message: string
    likes: number
}

const Post = (props: PropsType) => {
    return (
                <div className={s.item}>
                    <img src="https://www.pngitem.com/pimgs/m/537-5372558_flat-man-icon-png-transparent-png.png"/>
                    {props.message}
                    <div>
                        <span>{props.likes}</span>
                    </div>

                </div>
    )
}

export default Post;