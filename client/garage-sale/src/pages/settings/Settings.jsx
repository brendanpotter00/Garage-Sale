import React from 'react';
import "./settings.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import profile from "../../imgs/profile.png";

function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={profile} alt=""/>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user-circle"></i>
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                            className="settingsPPInput"
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Brendan" name="name" />
                    <label>Email</label>
                    <input type="email" placeholder="bpotter@gmail.com" name="email" />
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" />
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
