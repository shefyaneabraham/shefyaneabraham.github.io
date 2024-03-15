import React from "react";
import { Link } from 'react-router-dom';
import myImg from '../assets/heroImage.PNG'
// import NavigationLeft from './NavigationLeft';
import Navigation from './Navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLocationDot } from "@fortawesome/free-solid-svg-icons"
const Main = () => {
    return (
        <div data-aos="fade-down" className="relative block z-40 box-border">
        <Navigation />
        <div className="wrapper bg-primary max-w-[90%] relative mx-auto pl-[10%] pr-[5%] h-screen max-sm:pb-[10%] max-sm:max-w-full max-sm:px-[20%]">
            <div className="section-left overflow-hidden w-1/4 h-screen flex-col justify-center items-center flex fixed max-sm:pt-[12%] max-sm:w-full max-sm:h-auto max-sm:static max-sm:pt-[50%]">
                <div className="content pt-[0%] text-accent">
                    {/* <div className="hero-img block mx-auto w-3/5">
                        <img
                            src={myImg}
                            alt="illustration"
                        />
                    </div> */}
                    <div className="main-info-name uppercase text-center text-shadow-sm lg:text-2xl">Shefy Ane Abraham</div>
                    <div className="main-info-detail text-center lg:text-base block font-normal">Software Engineer | Full Stack Developer</div>
                    <div className="main-info-detail text-center lg:text-base block font-normal">
                    {/* <FontAwesomeIcon icon={faLocationDot} /> Toronto, Canada */}
                    </div>
                </div>
            </div>
            <div className="section-right w-[65%] text-accent h-[90vh] float-right gap-x-4 gap-y-4 text-center flex-col justify-center items-center flex relative pt-[5vh] left-auto right-[0%] inset-y-[0%] max-sm:pt-[50%] max-sm:w-full max-sm:h-auto max-sm:flex">
                <nav className="nav text-left pl-[6%] pt-[10%]">
                    <div className="items block nav-font font-normal text-9xl max-sm:text-6xl">
                        <div className="item transition duration-150 ease-in-out hover:scale-110 text-shadow-lg">
                            <Link to="/about">ABOUT</Link>
                        </div>
                        <div className="item transition duration-150 ease-in-out hover:scale-110 text-shadow-lg">
                            <a href="/work">WORK</a>
                        </div>
                        <div className="item transition duration-150 ease-in-out hover:scale-110 text-shadow-lg">
                            <a href="/projects">PROJECTS</a>
                        </div>
                        <div className="item transition duration-150 ease-in-out hover:scale-110 text-shadow-lg">
                            <a href="/contact">CONTACT</a>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <div className="nav-line bg-line h-px w-[100px]"></div> */}
        </div>
        </div>
    );
}
export default Main;