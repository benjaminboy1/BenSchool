import React from "react";
import {ImMenu3, ImMenu4} from 'react-icons/im'
import pin from "../assets/images/pin.png"
import { useState } from "react";




const Navbar = () => {
        const [open, setOpen] = useState(true);
        const menu = [
        { title:"Home", icon:"home", link:"Home"},
        { title:"Register", icon:"person-add-outline", link:"Register" },
        { title:"Payment", icon:"cash-outline", link:"Payment"},
        { title:"Reporter", icon:"settings", link:"Reporter"},]

    return(
        <div className="w-full h-10 bg-slate md:hidden sm:block relative">
            <div>
                <div className="flex space-x-[34%]">
                    <div className="mt-1 ml-1 ">
                    <img  alt="" src={pin} className="w-8 h-8" />
                    </div>
                    <div className="text-center itms-center justify-center">
                    <h1 className="text-white mt-2 ">BenSchool</h1>
                    </div>
                    
                </div>
                <div className="relative flex justify-end">
                    <button  className="absolute text-cyan-500 text-[28px] mt-[-2rem]" onClick={() => setOpen(!open)}>
                    {open ? <ImMenu4 className=""/> : <ImMenu3 className=""/>}
                    </button>
                </div>

                <div>
                    <ul className={`${open ? "hidden" : "block duration-500 top-30"} space-x-2  bg-slate absolute items-center text-center w-full p-8`}>{menu.map((menu,i)=>(
                        <li key={i} className="space-x-4 hover:bg-light-white rounded text-gray-200"><ion-icon name={menu.icon}></ion-icon>
                        <a href="" className="text-center items-center text-gray-200">
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