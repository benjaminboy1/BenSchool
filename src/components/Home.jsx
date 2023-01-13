import React from "react";
import {AiFillStar, AiOutlineAppstore, AiOutlineArrowRight, AiOutlineSearch, AiOutlineDollar} from "react-icons/ai";
import {GiPathDistance} from "react-icons/gi";
import user from "../assets/images/user.png";

import horse from "../assets/images/horse.png";

import phone from "../assets/images/phone.png";
import salad from "../assets/images/salad.png";
import restaurant from "../assets/images/restaurant.png";

import television from "../assets/images/television.png";
import dog from "../assets/images/dog.png";
import car from "../assets/images/car.png";
import house from "../assets/images/house.png";
import more from "../assets/images/more.png";
import benja from "../assets/images/benja.jpg";






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
                <div className="flex items-center justify-between mt-8">
                    <div className="title">
                        <h1 className="text-[35px] tracking-[1px] font-black">
                            find us
                        </h1>
                    <span className="text-[16px] opacity-70">
                        <strong>377 School,</strong> find others
                    </span>
                    </div>
                
                <div className="flex items-center justify-between">
                        <div className="specials px-4 text-center border-r-2">
                        <h3 className="text-[20px] font-bold text-cyan-800">45</h3>
                        <small className="text-[16px] opacity-70">Specials</small>
                         </div>

                         <div className="specials px-4 text-center border-r-2">
                        <h3 className="text-[20px] font-bold text-cyan-800">45</h3>
                        <small className="text-[16px] opacity-70">Specials</small>
                         </div>

                </div>

                </div>

                {/* Categories div */}
                <div className="flex mt-8 items-center justify-between gap-10">
                   
                    <div className="singleCategory grid items-center justify-between text-center">
                        <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
                            <img src={user} alt="" className=" w-[70%] flex justify-center m-auto"/>
                        </div>

                        <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
                           ITALIAN 
                        </span>

                    </div>
                    <div className="singleCategory grid items-center justify-between text-center">
                        <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
                            <img src={horse} alt="" className=" w-[70%] flex justify-center m-auto"/>
                        </div>

                        <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
                           HORSE 
                        </span>

                    </div>
                    <div className="singleCategory grid items-center justify-between text-center">
                        <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
                            <img src={restaurant} alt="" className=" w-[70%] flex justify-center m-auto"/>
                        </div>

                        <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
                           FOODS
                        </span>

                    </div>
                    <div className="singleCategory grid items-center justify-between text-center">
                        <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
                            <img src={salad} alt="" className=" w-[70%] flex justify-center m-auto"/>
                        </div>

                        <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
                           SALADE
                        </span>

                    </div>
                    <div className="singleCategory grid items-center justify-between text-center">
                        <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
                            <img src={phone} alt="" className=" w-[70%] flex justify-center m-auto"/>
                        </div>

                        <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
                           PHONE 
                        </span>

                    </div>
                    <div className="singleCategory grid items-center justify-between text-center">
                        <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
                            <img src={dog} alt="" className=" w-[70%] flex justify-center m-auto"/>
                        </div>

                        <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
                           PDOG
                        </span>

                    </div>
                    <div className="singleCategory grid items-center justify-between text-center">
                        <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
                            <img src={television} alt="" className=" w-[70%] flex justify-center m-auto"/>
                        </div>

                        <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
                           TELEVISION
                        </span>

                    </div>
                    <div className="singleCategory grid items-center justify-between text-center">
                        <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
                            <img src={car} alt="" className=" w-[70%] flex justify-center m-auto"/>
                        </div>

                        <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
                           CAR
                        </span>

                    </div>
                    <div className="singleCategory grid items-center justify-between text-center">
                        <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
                            <img src={house} alt="" className=" w-[70%] flex justify-center m-auto"/>
                        </div>

                        <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
                          HOUSE
                        </span>

                    </div>
                    <div className="singleCategory grid items-center justify-between text-center ">
                        <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] hover:bg-cyan-200 rounded-full flex items-center justify-center m-auto p-1">
                            <img src={more} alt="" className=" w-[70%] flex justify-center m-auto hover:scale-[1.2] transition-all cursor-pointer "/>
                        </div>

                        <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
                          MORE
                        </span>

                    </div>
                </div>

                {/* Cards section */}
                <div className="restaurant mt-2">
                <div className="flex items-center justify-between">
                    <div className="title">
                        <h1 className="text-[24px] text-slate font-bold">New Students</h1>
                        <span className="text-[13px] opacity-70"><strong>8 new students added,</strong>
                        <br/>we are already to registe the new students</span>
                    </div>
                    <button className="rounded-[5px] bg-text-white text-base bg-sky-200 hover:bg-[#55545e] px-4 py-2 transition-all md:block hidden ">
                        Show All <AiOutlineArrowRight  className="text-[20px]"/></button>

                </div>

                <div className="restaurantContainer py-2 flex justify-between items-center">
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