import React from 'react';
import "./post.css";
//import { Link } from "react-router-dom";
import postImg from '../../imgs/profile.png';
import police from '../../imgs/police.png';


function post() {
    return (
        <div className="post">
            
            <img className="postImg" src={police} alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Life</span>
                    <span className="postCat">Bedroom</span>
                </div>
                <span className="postTitle">
                    My Bedframe
                </span>
                <hr/>
                <span className="postDate">
                    1 hour ago
                </span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    )
}

export default post
