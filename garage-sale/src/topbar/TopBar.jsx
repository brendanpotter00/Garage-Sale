import "./topbar.css";
import profile from "./profile.png";

import React from 'react'

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fas fa-globe"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        Home
                    </li>
                    <li className="topListItem">
                        About
                    </li>
                    <li className="topListItem">
                        Contact
                    </li>
                    <li className="topListItem">
                        Post
                    </li>
                    <li className="topListItem">
                        Logout
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                className="topImg"
                src={profile}
                alt=""
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
