import React from "react";
import HomeNav from "./HomeNav";
import portfolio1 from "../assets/portfolio/hiperlearn-img.png"
import details from "../assets/portfolio/hiperlearn-img.png"
import { projectsData } from "../data";
import { skillsData } from "../data";
const Project = () => {
    return (
        <div data-aos="fade-up">
            <HomeNav primary={true} />
            <div className="container bg-secondary max-w-[100%] fixed overflow-auto mx-auto pl-[5%] pr-[5%] h-screen">
                <div className="wrapper block max-w-[90%] relative mx-auto pl-[10%] pr-[5%] h-screen">
                    <div className="about-section max-w-[90%] relative mx-auto py-[10%] pr-[5%];">
                        <div className="content block text-secondary text-left">
                            <div className="header-container overflow-hidden mb-[2vh] pt-[5%]">
                                <div data-aos="fade-left" className="header-item text-shadow-lgS text-8xl max-sm:text-4xl">PROJECTS</div>
                                <div className="gap-4 columns-3 pt-[2%] max-sm:gap-2 max-sm:columns-1">
                                    <div className="grid gap-4 max-sm:gap-2">
                                        <a href ="https://google.com" target="_blank" className="group block relative cursor-pointer overflow-hidden rounded-md">
                                            <img className="blur-none group-hover:blur-sm"src={require(`../assets/portfolio/portfolio.png`)} />
                                            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                                                <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
                                                <div className="absolute inset-0 flex flex-col p-8">
                                                    {/* <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">Share</button> */}
                                                    <div className="relative z-10 mt-auto break-words text-lg font-semibold text-accent">Personal Portfolio</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href ="https://google.com" target="_blank" className="group block relative cursor-pointer overflow-hidden rounded-md">
                                            <img className="blur-none group-hover:blur-sm" src={require(`../assets/portfolio/hiperlearn-img.png`)} />
                                            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                                                <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
                                                <div className="absolute inset-0 flex flex-col p-8">
                                                    {/* <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">Share</button> */}
                                                    <div className="relative z-10 mt-auto break-words text-lg font-semibold text-accent">Hiperlearn Learning Platform</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href ="https://google.com" target="_blank" className="group block relative cursor-pointer overflow-hidden rounded-md">
                                            <img className="blur-none group-hover:blur-sm" src={require(`../assets/portfolio/song.png`)} />
                                            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                                                <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
                                                <div className="absolute inset-0 flex flex-col p-8">
                                                    {/* <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">Share</button> */}
                                                    <div className="relative z-10 mt-auto break-words text-lg font-semibold text-accent">Song Recommender System based on Emotion Level of the Song using NLP and Machine Learning.</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="grid gap-4 max-sm:gap-2">
                                        <a href ="https://google.com" target="_blank" className="group block relative cursor-pointer overflow-hidden rounded-md">
                                            <img className="blur-none group-hover:blur-sm" src={require(`../assets/portfolio/weather-img.png`)} />
                                            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                                                <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
                                                <div className="absolute inset-0 flex flex-col p-8">
                                                    {/* <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">Share</button> */}
                                                    <div className="relative z-10 mt-auto break-words text-lg font-semibold text-accent">Weather Data Analysis and Prediction using Spark</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href ="https://google.com" target="_blank" className="group block relative cursor-pointer overflow-hidden rounded-md">
                                            <img className="blur-none group-hover:blur-sm" src={require(`../assets/portfolio/neo4j-img.png`)} />
                                            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                                                <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
                                                <div className="absolute inset-0 flex flex-col p-8">
                                                    {/* <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">Share</button> */}
                                                    <div className="relative z-10 mt-auto break-words text-lg font-semibold text-accent">Using Neo4j for community graph: A case study</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href ="https://google.com" target="_blank" className="group block relative cursor-pointer overflow-hidden rounded-md">
                                            <img className="blur-none group-hover:blur-sm" src={require(`../assets/portfolio/iot-img.png`)} />
                                            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                                                <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
                                                <div className="absolute inset-0 flex flex-col p-8">
                                                    {/* <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">Share</button> */}
                                                    <div className="relative z-10 mt-auto break-words text-lg font-semibold text-accent">iMedBox for diabetes patients</div>
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                    <div className="grid gap-4 max-sm:gap-2">
                                        <a href ="https://google.com" target="_blank" className="group block relative cursor-pointer overflow-hidden rounded-md">
                                            <img className="blur-none group-hover:blur-sm" src={require(`../assets/portfolio/social-media-img.png`)} />
                                            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                                                <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
                                                <div className="absolute inset-0 flex flex-col p-8">
                                                    {/* <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">Share</button> */}
                                                    <div className="relative z-10 mt-auto break-words text-lg font-semibold text-accent">Detecting negative emotions from Social Media comments and messages using NLP and Machine Learning</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href ="https://google.com" target="_blank" className="group block relative cursor-pointer overflow-hidden rounded-md">
                                            <img className="blur-none group-hover:blur-sm" src={require(`../assets/portfolio/project-manage.png`)}  />
                                            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                                                <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
                                                <div className="absolute inset-0 flex flex-col p-8">
                                                    {/* <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">Share</button> */}
                                                    <div className="relative z-10 mt-auto break-words text-lg font-semibold text-accent">Project Management System</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;