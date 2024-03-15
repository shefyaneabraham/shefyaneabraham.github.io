import React from "react";
import HomeNav from "./HomeNav";
import image from '../assets/certificate.png'
import rcourse from '../assets/certificates/react-course.pdf'
import { experienceData, certificateData } from "../data"


const Work = () => {
    console.log(rcourse)
    console.log("import",certificateData[0].src)
    return (
        <div data-aos="fade-up">
            <HomeNav primary={true} />
            <div className="container bg-secondary max-w-[100%] fixed overflow-auto mx-auto pl-[10%] pr-[5%] h-screen">
                <div className="wrapper block max-w-[90%] relative mx-auto pl-[5%] pr-[5%] h-screen">
                    <div className="work-section max-w-[90%] relative mx-auto py-[10%] pr-[5%];">
                        <div className="content block text-secondary text-left">
                            <div className="header-container overflow-hidden mb-[2vh] pt-[5%]">
                            <div data-aos="fade-left" className="header-item text-shadow-lgS text-8xl max-sm:text-6xl">Work</div>
                                <div className="header-content relative flex flex-col py-5 justify-center items-center flex fixed">
                                    <p className="edu-item max-w-[75%] block font-normal text-3xl uppercase leading-[1.9em] max-sm:text-xl">Experience</p>
                                    <div className="nav-line bg-line h-px w-[100px]"></div>
                                </div>
                                <div>

                                    {experienceData.map((exp) => {
                                        return (
                                            <ol>
                                                <li className="mb-12">
                                                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                                                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block">
                                                        </div>
                                                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to Present">{exp.date}
                                                        </header>
                                                        <div className="z-10 sm:col-span-6">
                                                            <div className="font-bold leading-snug text-secondary group-hover:text-tertiary">
                                                                <div>
                                                                    <a className="inline-flex items-baseline font-large text-secondary leading-tight text-base"
                                                                        href={exp.link} target="_blank" rel="noreferrer noopener" aria-label="Lead Engineer at Upstatement (opens in a new tab)">
                                                                        {/* <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span> */}
                                                                        <span>
                                                                            <span className="inline-block group-hover:text-tertiary">{exp.company}
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform hover:-translate-y-1 hover:translate-x-1 focus-visible:-translate-y-1 focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                                                            </span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <div className="font-thin text-slate-500" aria-hidden="true">{exp.title}</div>
                                                                </div>
                                                            </div>
                                                            <p className="mt-2 text-sm leading-normal">{exp.description}</p>
                                                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                                                {exp.technology?.map((tech, i) => {
                                                                    return (
                                                                        <li key={i} className="mr-1.5 mt-2">
                                                                            <div className="flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium leading-5 text-tertiary ">{tech}</div>
                                                                        </li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        )
                                    })}

                                </div>
                                <div className="header-content relative flex flex-col py-5 justify-center items-center flex fixed">
                                    <p className="edu-item max-w-[75%] block font-normal text-3xl uppercase leading-[1.9em] max-sm:text-xl">Certifications</p>
                                    <div className="nav-line bg-line h-px w-[100px]"></div>
                                </div>
                                <div>
                                    <div className=" relative grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                                        {certificateData.map(cert=>{return(
                                            <div className="mb-12">
                                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"></div>
                                                <div className="z-10 sm:order-2 sm:col-span-6">
                                                    <h3>
                                                        <a className="inline-flex items-baseline font-medium leading-tight text-secondary hover:text-tertiary focus-visible:text-tertiary  group/link text-base" href={cert.src? require(`../assets/certificates/${cert.src}.pdf`): cert.link} target="_blank" rel="noreferrer" aria-label="Build a Spotify Connected App (opens in a new tab)">
                                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                            <span>{cert.title}
                                                                <span className="inline-block">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                                                                        </path>
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </h3>
                                                    <p className="mt-2 text-sm leading-normal">{cert.date}</p>
                                                </div>
                                                <img className="rounded-md"src={image}></img>
                                             </div>
                                        </div>
                                        )})}
                                        
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
export default Work;