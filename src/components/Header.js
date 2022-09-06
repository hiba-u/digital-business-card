import React from "react"
import lauraImg from "../images/Rectangle 90.png"
import emailIcon from "../images/email-icon.png"
import linkedinIcon from "../images/linkedin-vector.png"

export default function Header(){
    return (
        <div id="header">
            <img id="laura-img" src={lauraImg} alt="Laura Smith"/>
            <h1 id="title">Laura Smith</h1>
            <h4 id="role">Frontend Developer</h4>
            <p id="website">laurasmith.website</p>
            <div id="btn-div">
                <div id="buttons">
                    <div id="email-btn">
                        <img src={emailIcon}/>
                        <p>Email</p>
                    </div>
                     <div id="linkedin-btn">
                        <img src={linkedinIcon}/>
                        <p>Linkedin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}