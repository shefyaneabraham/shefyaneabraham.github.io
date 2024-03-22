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
                                    <div className="mb-2"> Back in 2012, my journey into coding began when my brother introduced me to the world of programming during my school days—a world that instantly captivated me. Fast-forward to today, I have had the opportunity to build applications for both large corporations and startups.</div>
                                    <div className="mb-2">In this ever-evolving landscape of technology, I've learned that success isn't just about technical proficiency—it's about passion, creativity, and a relentless pursuit of excellence. With every line of code, every late-night debugging session, I'm driven by a sense of purpose and a desire to push the boundaries of what's possible.</div>
                                    <div className="mb-2">As I continue to write the next chapters of my story, I'm reminded of the countless opportunities and challenges that lie ahead. But amidst the uncertainty, one thing remains clear: I am a problem solver, a creative thinker, and a versatile technophile. And with each new project, I'm committed to leaving my mark on the world, one line of code at a time.</div>
                                    <div className="mb-2">When I’m not at the computer, you'll often find me exploring new destinations, experimenting in the kitchen, immersing myself in a good book, or enjoying a captivating movie.</div>


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