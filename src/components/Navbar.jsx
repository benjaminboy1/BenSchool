import React from "react";
import {ImMenu3, ImMenu4} from 'react-icons/im'
import pin from "../assets/images/pin.png"
import { useState } from "react";




const Navbar = () => {
        const [open, setOpen] = useState(true);
        const menu = [
        { title:"Home", icon: "Home", link:"Home"},
        { title:"Register", icon: "person-add-outline", link:"Register" },
        { title:"Payment", icon: "cash-outline", link:"Payment"},
        { title:"Reporter", icon: "settings", link:"Reporter"},]

    return(
        <div className="w-full h-10 bg-slate md:hidden sm:block">
            <div>
                <div className="flex  sm:space-x-[40%]">
                    <div className="mt-1 ml-1 ">
                    <img  alt="" src={pin} className="w-8 h-8" />
                    </div>

                    <h1 className="text-white mt-2">BenSchool</h1>
                </div>
                <div className="relative flex justify-end">
                    <button  className="absolute text-cyan-500 text-[28px] mt-[-2rem]" onClick={() => setOpen(!open)}>
                    {open ? <ImMenu4 className=""/> : <ImMenu3 className=""/>}
                    </button>
                </div>

                <div>
                    <ul className={`${open ? "hidden" : "block duration-500 top-30"}  bg-cyan-800 absolute items-center text-center w-full p-8`}>{menu.map((menu,i)=>(
                        <li key={i} className="">{menu?.icon}
                        <a href="" className="text-center">
                            {menu.title}
                        </a>
                    </li>

                    ))}
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;