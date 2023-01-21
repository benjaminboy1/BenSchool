import React from "react";
import {AiFillStar, AiOutlineAppstore, AiOutlineArrowRight, AiOutlineSearch, AiOutlineDollar} from "react-icons/ai";
import {GiPathDistance} from "react-icons/gi";
import { prof4 } from "../assets/images/prof4.jpeg";

import benja from "../assets/images/benja.jpg";






const Home = () => {

    const onlineProfile = [
        {name: "Pr.Ursile", Image: 'https://static.onzemondial.com/8/2023/01/photo_article/814979/324727/1200-L-psg-angers-messi-ovationn-par-le-parc-pour-sa-victoire-en-coupe-du-monde.jpg' },
       
    ]

    return(
        <div className="h-[100%] basis-80 ">
                {/* Top section */}
                
                <div className="flex justify-between">
                <div className="flex items-center pb-2 basis-1/2">
                    <AiOutlineSearch className="text-slate text-[20px] cursor-pointer"/>
                    <input type="text" placeholder="Search your prefer" className="border-none outline-none text-base focus:outline-none " />
                </div>

                <div className="flex gap-2 items-center">
                    <AiOutlineAppstore className="text-slate cursor-pointer text-[28px] hover:text-[30px] transition-all"/>
                    <button className="rounded-[5px] bg-slate text-white text-base hover:bg-[#55545e] px-2 py-1 transition-all md:block hidden ">Call Leader</button>
                </div>
                </div>
                <div className=" border-b-2"></div>

                {/* title div */}
                <div className="flex items-center justify-between mt-1">
                    <div className="title">
                        <h1 className="text-[25px] tracking-[2px] font-black">
                           Home 
                        </h1>
                    <span className="text-[13px] opacity-70">
                        <strong>377 School,</strong> find others
                    </span>
                    </div>
                
                <div className="flex items-center justify-between">
                        <div className="px-2 text-center border-r-2">
                        <h3 className="text-[15px] font-bold text-cyan-800">45</h3>
                        <small className="text-[14px] opacity-70">Specials</small>
                         </div>
                        
                         <div className="px-2 text-center border-r-2">
                        <h3 className="text-[15px] font-bold text-cyan-800">45</h3>
                        <small className="text-[14px] opacity-70">Specials</small>
                         </div>
                        
                </div>

                </div>

                    {/*Professor id */}
                    <p className="text-steal text-xl">Ours Professor</p>

                    <div className="flex justify-between ">
                            {onlineProfile?.map((online,i) => (
                                <div key={i} className="mt-2">
                                <img src={online.Image} alt="" className="h-14 w-14 rounded-full object-cover border-2 border-gray-400 "/>
                                <div className=" bg-green-500 h-3 w-3 rounded-full ml-11 mt-[-18px] absolute ring-2 ring-gray-400 "></div>
                               
                                <h3 className="text-center text-[10px] font-medium opacity-70 mt-[-8px] ">
                                {online?.name}
                             </h3>
                             </div>

                            ))}
                        
                      
                       

                     

                        

                    </div>

                {/* Cards section */}
                <div className="restaurant mt-2">
                <div className="flex items-center justify-between">
                    <div className="title">
                        <h1 className="text-[24px] text-slate font-bold">New Students</h1>
                        <span className="text-[13px] opacity-70"><strong>8 new students added,</strong>
                        we are already to registe the new students</span>
                    </div>
                    <button className="rounded-[5px] bg-text-white text-base bg-sky-200 hover:bg-[#55545e] px-4 py-2 transition-all md:block hidden ">
                        Show All <AiOutlineArrowRight  className="text-[20px]"/></button>

                </div>

                <div className="restaurantContainer py-2 flex justify-between items-center md:grid-rows-1">
                    <div className="studentCards w-[180px] bg-cyan-100 p-3 rounded-[10px]">
                        <div className="imgDiv h-[100] w-full overflow-hidden rounded-md">
                            <img  src={benja} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <h1 className="restName text-base block text-center font-bold opacity-90">benjami boys</h1>
                        <small className="block text-center text-[#606060] text-base font-medium">african men</small>
                        <div className="info flex justify-center items-center">
                           
                            <div className="singleInfo grid mt-2 px-2">
                                <AiFillStar className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">2.4</h4>

                            </div>
                            <div className="singleInfo grid border-x-2 px-2">
                                <AiOutlineDollar className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">50</h4>

                            </div>
                            <div className="singleInfo grid px-2">
                                <GiPathDistance className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">7km</h4>

                            </div>

                        </div>
                    </div>
                    <div className="studentCards w-[180px] bg-cyan-100 p-3 rounded-[10px]">
                        <div className="imgDiv h-[100] w-full overflow-hidden rounded-md">
                            <img  src={benja} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <h1 className="restName text-base block text-center font-bold opacity-90">benjami boys</h1>
                        <small className="block text-center text-[#606060] text-base font-medium">african men</small>
                        <div className="info flex justify-center items-center">
                           
                            <div className="singleInfo grid mt-2 px-2">
                                <AiFillStar className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">2.4</h4>

                            </div>
                            <div className="singleInfo grid border-x-2 px-2">
                                <AiOutlineDollar className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">50</h4>

                            </div>
                            <div className="singleInfo grid px-2">
                                <GiPathDistance className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">7km</h4>

                            </div>

                        </div>
                    </div>
                    <div className="studentCards w-[180px] bg-cyan-100 p-3 rounded-[10px]">
                        <div className="imgDiv h-[100] w-full overflow-hidden rounded-md">
                            <img  src={benja} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <h1 className="restName text-base block text-center font-bold opacity-90">benjami boys</h1>
                        <small className="block text-center text-[#606060] text-base font-medium">african men</small>
                        <div className="info flex justify-center items-center">
                           
                            <div className="singleInfo grid mt-2 px-2">
                                <AiFillStar className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">2.4</h4>

                            </div>
                            <div className="singleInfo grid border-x-2 px-2">
                                <AiOutlineDollar className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">50</h4>

                            </div>
                            <div className="singleInfo grid px-2">
                                <GiPathDistance className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">7km</h4>

                            </div>

                        </div>
                    </div>
                    <div className="studentCards w-[180px] bg-cyan-100 p-3 rounded-[10px]">
                        <div className="imgDiv h-[100] w-full overflow-hidden rounded-md">
                            <img  src={benja} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <h1 className="restName text-base block text-center font-bold opacity-90">benjami boys</h1>
                        <small className="block text-center text-[#606060] text-base font-medium">african men</small>
                        <div className="info flex justify-center items-center">
                           
                            <div className="singleInfo grid mt-2 px-2">
                                <AiFillStar className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">2.4</h4>

                            </div>
                            <div className="singleInfo grid border-x-2 px-2">
                                <AiOutlineDollar className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">50</h4>

                            </div>
                            <div className="singleInfo grid px-2">
                                <GiPathDistance className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">7km</h4>

                            </div>

                        </div>
                    </div>
                    <div className="studentCards w-[180px] bg-cyan-100 p-3 rounded-[10px]">
                        <div className="imgDiv h-[100] w-full overflow-hidden rounded-md">
                            <img  src={benja} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <h1 className="restName text-base block text-center font-bold opacity-90">benjami boys</h1>
                        <small className="block text-center text-[#606060] text-base font-medium">african men</small>
                        <div className="info flex justify-center items-center">
                           
                            <div className="singleInfo grid mt-2 px-2">
                                <AiFillStar className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">2.4</h4>

                            </div>
                            <div className="singleInfo grid border-x-2 px-2">
                                <AiOutlineDollar className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">50</h4>

                            </div>
                            <div className="singleInfo grid px-2">
                                <GiPathDistance className="flex mt-auto justify-center items-center" />
                                <h4 className="font-semibold text-sm text-[#4f4d58]">7km</h4>

                            </div>

                        </div>
                    </div>

                </div>

                </div>
                
        </div>
    )
}

export default Home;