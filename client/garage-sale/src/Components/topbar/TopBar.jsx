import "./topbar.css";
import { Link } from "react-router-dom";
import profile from "./profile.png";

import React from 'react'

export default function TopBar() {
    const user = false;
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
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                             Write
                        </Link>
                    </li>
                    {user && <li className="topListItem">Logout</li>}

                </ul>
            </div>
            <div className="topRight">
            {user ? (
                <Link className="link" to="/settings">
                    <img
                    className="topImg"
                    src={profile}
                    alt=""
                    />
                </Link>
                ) : (
                <ul className="topList">
                    <li className="topListItem">
                    <Link className="link" to="/login">
                        Login
                    </Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/register">
                        Register
                    </Link>
                    </li>
                </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
