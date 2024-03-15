import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
const Navigation = () => {
    return (
        <nav className="left-nav z-50 w-[6%] h-screen flex-col justify-start items-center flex fixed pt-[5%] pb-[30px] max-sm:w-[10%]">
            <ul>
                <li className="flex-[0_auto] -rotate-90 mb-10 pl-5 pr-[15px]">
                    <a href="https://www.linkedin.com/in/shefyaneabraham/">
                        {/* <i className="bx bxl-twitter" /> */}
                        <FontAwesomeIcon className="highlight text-accent"icon={faLinkedinIn} />
                    </a>
                </li>
                <li className="flex-[0_auto] -rotate-90 mb-10 pl-5 pr-[15px]">
                    <a href="https://www.instagram.com/shefy.abraham/">
                        {/* <i className="bx bxl-twitter" /> */}
                        <FontAwesomeIcon  className="highlight text-accent" icon={faInstagram} />
                    </a>
                </li>
                <li className="flex-[0_auto] -rotate-90 mb-10 pl-5 pr-[15px]">
                    <a href="https://twitter.com/AbrahamShefy">
                        {/* <i className="bx bxl-twitter" /> */}
                        <FontAwesomeIcon  className="highlight text-accent" icon={faTwitter} />
                    </a>
                </li>
                <li className="flex-[0_auto] -rotate-90 mb-10 pl-5 pr-[15px]">
                    <a href="https://github.com/shefyaneabraham">
                        {/* <i className="bx bxl-twitter" /> */}
                        <FontAwesomeIcon  className="highlight text-accent" icon={faGithub} />
                    </a>
                </li>
            </ul>
            <div className="nav-line bg-secondary w-px h-[100px] mt-2.5 mb-20"></div>
        </nav>
    )

}
export default Navigation;