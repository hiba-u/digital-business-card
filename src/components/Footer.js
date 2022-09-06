import React from "react"
import twitterIcon from "../images/Twitter Icon.png"
import fbIcon from "../images/Facebook Icon.png"
import instaIcon from "../images/Instagram Icon.png"
import githubIcon from "../images/GitHub Icon.png"

export default function Footer(){
    return (
        <div id="footer">
            <div id="icons">
                <img src={twitterIcon} alt="Twitter"/>
                <img src={fbIcon} alt="Facebook"/>
                <img src={instaIcon} alt="Instagram"/>
                <img src={githubIcon} alt="GitHub"/>
            </div>
        </div>
    )
}