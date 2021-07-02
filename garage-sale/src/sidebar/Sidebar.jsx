import "./sidebar.css";
import logo from "../imgs/logo.png";

export default function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebarItem">
                <div className="sidebarCard">
                <span className="sidebarTitle">About</span>
                </div>
                <img className="sidebarImg" src={logo} alt="" />
                <p> Fraternity At Trinity University</p>
            </div>
            
            
            <div className="sidebarItem">
                <div className="sidebarCard">
                <span className="sidebarTitle">Categories</span>
                </div>
                <ul className="sidebarList"> 
                    <li className="sidebarListItem"> All </li>
                    <li className="sidebarListItem"> Bedroom </li>
                    <li className="sidebarListItem"> Desk </li>
                    <li className="sidebarListItem"> Kitchen </li>
                    <li className="sidebarListItem"> Outside </li>
                    <li className="sidebarListItem"> Tech </li>
                    <li className="sidebarListItem"> Other </li>
                    
                </ul>
            
            </div>
            
            <div className="sidebarItem">
                <div className="sidebarCard">
                <span className="sidebarTitle">Follow Us</span>
                </div>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fas fa-globe"></i>
                </div>
           
            </div>
        </div>
    )
}
