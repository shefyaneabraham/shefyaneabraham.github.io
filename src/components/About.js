import React from "react";
import HomeNav from "./HomeNav";
import { skillsData } from "../data";
import myImg from '../assets/profile1-img.jpeg'
const About = () => {
    return (
        <div data-aos="fade-up" className="max-w-[100%] h-screen">
            <HomeNav primary={true} />
            <div className="container bg-secondary max-w-[100%] fixed overflow-auto mx-auto pl-[5%] pr-[5%] h-screen ">
                <div className="wrapper block max-w-[90%] relative mx-auto pl-[10%] pr-[5%] h-screen">
                    <div className="about-section flex-col justify-center items-start flex max-w-[90%] relative mx-auto py-[10%] pr-[5%];">
                        <div className="content block text-secondary text-left">
                        
                            <div className="header-container overflow-hidden mb-[2vh] pt-[5%]">
                                <div data-aos="fade-left" className="header-item text-shadow-lgS text-8xl max-sm:text-6xl">ABOUT</div>
                                <p>
                                    <span className="description max-w-[75%] block font-normal text-3xl pb-[2%] max-sm:pb-[4%] leading-[1.9em] max-sm:text-xl">Hi, I'm Shefy. A Software Developer based in Toronto, Canada.</span>
                                    <div className="mb-2"> I'm a problem solver, a creative thinker, and a versatile technophile.</div>
                                    <div className="mb-2">I’ve always sought out opportunities and challenges that are meaningful to me. Therefore, I’ve had the privilege of working at a huge corporation, a start-up, as well as a customer engagement software company.</div>
                                    <div className="mb-2">I have experience developing multiple SaaS solutions both from scratch and by customizing existing platforms. Currently, I'm working as a Software Developer at Khoros.</div>


                                </p>
                                <div className="header-content relative flex flex-col py-5 justify-center items-center flex fixed">
                                    <p className="edu-item max-w-[75%] block font-normal text-3xl uppercase leading-[1.9em]">Skills</p>
                                    <div className="nav-line bg-line h-px w-[100px]"></div>
                                </div>
                                {skillsData.map((data) => {
                                    return (
                                        <>
                                            <div className="description max-w-[75%] block font-normal text-xl pb-[2%] leading-[1.9em]">{`${data.domain}:`}
                                                <span className="details text-xs">
                                                    {data.details}<br />
                                                </span>

                                            </div>
                                            {/* <span className="description max-w-[75%] block font-normal text-sm pb-[2%] leading-[1.9em]"> */}

                                            {/* </span> */}
                                        </>
                                    )
                                })}
                                <div className="header-content relative flex flex-col py-5 justify-center items-center flex fixed">
                                    <p className="edu-item max-w-[75%] block font-normal text-3xl uppercase leading-[1.9em]">Education</p>
                                    <div className="nav-line bg-line h-px w-[100px]"></div>
                                </div>
                                <ol class="relative w-4/5 ml-2.5 border-s border-prime-200 dark:border-white-700">
                                    <li class="mb-10 ms-4">
                                        <div class="absolute w-3 h-3 bg-prime-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018 - 2020</time>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">MASTER OF TECHNOLOGY, COMPUTER SCIENCE AND ENGINEERING</h3>
                                        <p class="text-base font-normal text-gray-500 dark:text-gray-400"> Vellore Institute of Technology (VIT), IN</p>
                                    </li>
                                    <li class="mb-10 ms-4">
                                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2014 - 2018</time>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">BACHELOR OF ENGINEERING, COMPUTER SCIENCE AND ENGINEERING</h3>
                                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Chhattisgarh Swami Vivekanand Technical University, IN</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default About;