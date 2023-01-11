import React from "react";
import { AiOutlineAppstore, AiOutlineSearch } from "react-icons/ai";


const Home = () => {
    return(
        <div className="h-[100%] basis-80 ">
                {/* Top section */}
                
                <div className="flex justify-between">
                <div className="flex items-center pb-2 basis-1/2">
                    <AiOutlineSearch className="text-slate text-[20px] cursor-pointer"/>
                    <input type="text" placeholder="Search your prefer" className="border-none outline-none text-base focus:outline-none " />
                </div>

                <div className="flex gap-4 items-center">
                    <AiOutlineAppstore className="text-slate cursor-pointer text-[30px] hover:text-[33px] transition-all"/>
                    <button className="rounded-[5px] bg-slate text-white text-base hover:bg-[#55545e] px-2 py-2 transition-all md:block hidden ">Call Leader</button>
                </div>
                </div>
                <div className=" border-b-2"></div>

                {/* title div */}
                <div className="flex items-center justify-center mt-8">
                    <div className="title">
                        <h1 className="text-[35px] tracking-[1px] font-black">
                            find us
                        </h1>
                    </div>

                </div>
                
        </div>
    )
}

export default Home;