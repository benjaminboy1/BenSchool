import React from "react";
import {ImMenu3} from 'react-icons/im'
import pin from "../assets/images/pin.png"



const Navbar = () => {
    return(
        <div className="w-full h-10 bg-slate md:hidden sm:block">
            <div>
                <div className="flex space-x-4">
                    <div className="mt-1 ">
                    <img  alt="" src={pin} className="w-8 h-8" />
                    </div>

                    <h1 className="text-white mt-2">BenSchool</h1>
                </div>
                <div className="flex justify-end">
                    <button  className="text-cyan-500 text-[28px] mt-[-2rem]">
                    <ImMenu3/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;