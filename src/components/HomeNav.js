import React from "react";
import { Link } from 'react-router-dom';
const HomeNav = ({primary}) => {
    console.log(primary)
    return (
        <nav className="left-nav  z-50 w-[6%] h-screen flex-col justify-start items-center flex fixed pt-[5%] pb-[30px] max-sm:w-[10%] max-sm:pt-[10%]">
            <ul>
                <li className={`flex-[0_auto] hover:text-shadow-smS ${primary? 'text-secondary': 'text-accent'} -rotate-90 mb-10 pl-5 pr-[15px]`}>
                <Link to="/">HOME</Link>
                </li>
            </ul>
            <div className={`nav-line ${primary? 'bg-line' : 'bg-secondary' } w-px h-[100px] mt-2.5 mb-20`}>
            </div>
        </nav>
    )

}
export default HomeNav;