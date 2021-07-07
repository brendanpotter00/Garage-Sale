import "./header.css";
import headerImg1 from "../../imgs/wolfSil.png";
import headerImg2 from "../../imgs/wolfBlack.png";
import headerTest from "../../imgs/profile.png";

export default function Header() {
    return (
        <div className="header">
            header
            <div className="headerTitles">
                <span className="headerTitleSm">Phi Sigma Chi</span>
                <span className="headerTitleLg">Garage</span>
            </div>
            <img className="headerImg" src={headerImg1} alt="" />
        </div>
    )
}
