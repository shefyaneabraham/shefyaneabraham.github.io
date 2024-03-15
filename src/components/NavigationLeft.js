import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
const NavigationLeft = () => {
    return (
        <nav className="left-nav z-50 w-[6%] h-screen flex-col justify-start items-center flex fixed pt-[5%] pb-[30px] max-sm:flex max-sm:w-full max-sm:h-auto max-sm:flex-row max-sm:pb-0 max-sm:static">
            {/* <ul> */}
                <div className="flex-[0_auto] -rotate-90 mb-10 pl-5 pr-[15px] max-sm:rotate-0">
                    <a href="https://www.linkedin.com/in/shefyaneabraham/">
                        {/* <i className="bx bxl-twitter" /> */}
                        <FontAwesomeIcon className="highlight text-accent"icon={faLinkedinIn} />
                    </a>
                </div>
                <div className="flex-[0_auto] -rotate-90 mb-10 pl-5 pr-[15px] max-sm:rotate-0">
                    <a href="https://www.instagram.com/shefy.abraham/">
                        {/* <i className="bx bxl-twitter" /> */}
                        <FontAwesomeIcon  className="highlight text-accent" icon={faInstagram} />
                    </a>
                </div>
                <div className="flex-[0_auto] -rotate-90 mb-10 pl-5 pr-[15px] max-sm:rotate-0">
                    <a href="https://twitter.com/AbrahamShefy">
                        {/* <i className="bx bxl-twitter" /> */}
                        <FontAwesomeIcon  className="highlight text-accent" icon={faTwitter} />
                    </a>
                </div>
                <div className="flex-[0_auto] -rotate-90 mb-10 pl-5 pr-[15px] max-sm:rotate-0">
                    <a href="https://github.com/shefyaneabraham">
                        {/* <i className="bx bxl-twitter" /> */}
                        <FontAwesomeIcon  className="highlight text-accent" icon={faGithub} />
                    </a>
                </div>
            {/* </ul> */}
            <div className="nav-line bg-secondary w-px h-[100px] mt-2.5 mb-20 max-sm:w-[100px] max-sm:h-0.5 max-sm:mb-[40px] max-sm:mt-0"></div>
        </nav>
    )

}
export default NavigationLeft;