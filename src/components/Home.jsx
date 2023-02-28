import React from "react";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import {Pagination,Autoplay} from 'swiper';
import {AiOutlineMessage, AiOutlineAppstore, AiOutlineArrowRight, AiOutlineSearch} from "react-icons/ai";

import {SiGooglemaps} from "react-icons/si";
import {GoVerified} from "react-icons/go";
import {BsInfoCircle} from "react-icons/bs";











const Home = () => {

    const onlineProfile = [
        {name: "Pr.Gracias", Image: require('../assets/images/prof1.jpeg')},
        {name: "Pr.benjamin", Image: require('../assets/images/prof2.jpeg'),},
        {name: "Pr.Joskky", Image: require('../assets/images/prof3.jpeg'),},
        {name: "Pr.Ursille", Image: require('../assets/images/prof4.jpeg'),},
        {name: "Pr.T-leader", Image: require('../assets/images/prof5.jpeg'),},
        {name: "Pr.Pmiller", Image: require('../assets/images/prof6.jpg'),},
        {name: "Pr.Elvis", Image: require('../assets/images/prof7.jpg'),},
        {name: "Pr.Elvis", Image: require('../assets/images/prof7.jpg'),},
        {name: "Pr.Elvis", Image: require('../assets/images/prof7.jpg'),},
        {name: "Pr.Joseph", Image: require('../assets/images/prof8.jpg'),},
        {name: "Pr.JKK", Image: require('../assets/images/prof9.jpg'),},
        {name: "Pr.JKK", Image: require('../assets/images/prof9.jpg'),},
        {name: "Pr.Gracias", Image: require('../assets/images/prof1.jpeg')},
        {name: "Pr.benjamin", Image: require('../assets/images/prof2.jpeg'),},
        {name: "Pr.benjamin", Image: require('../assets/images/prof2.jpeg'),},
        {name: "Pr.benjamin", Image: require('../assets/images/prof2.jpeg'),},
        {name: "Pr.benjamin", Image: require('../assets/images/prof2.jpeg'),},
        {name: "Pr.Joskky", Image: require('../assets/images/prof3.jpeg'),},
        {name: "Pr.Ursille", Image: require('../assets/images/prof4.jpeg'),},

       
    ]

    const diapoShow = [
        {names: "Pr.Gracias", Photo: require('../assets/images/school1.jpeg')},
        {names: "Pr.benjamin", Photo: require('../assets/images/school2.jpeg'),},
        {names: "Pr.Joskky", Photo: require('../assets/images/school3.jpeg'),},
        {names: "Pr.Ursille", Photo: require('../assets/images/school4.jpeg'),},
        {names: "Pr.T-leader", Photo: require('../assets/images/school5.jpeg'),},
        {names: "Pr.Pmiller", Photo: require('../assets/images/school6.jpeg'),},
        {names: "Pr.Elvis", Photo: require('../assets/images/school7.jpeg'),},
        {names: "Pr.Elvis", Photo: require('../assets/images/school8.jpeg'),},
        {names: "Pr.Elvis", Photo: require('../assets/images/school9.jpeg'),},
        {names: "Pr.Elvis", Photo: require('../assets/images/school10.jpeg'),},
    ]

    const newStudents = [
        {name:"Benjamin.M", from:"New student from CANADA", picture: require('../assets/images/benj.jpeg'), icone:<GoVerified/>, icon1:<SiGooglemaps/>,  icon2:<BsInfoCircle/>, icon3:<AiOutlineMessage/>},
        {name:"Grace.M", from:"New student from BELGIUM", picture: require('../assets/images/grace.jpg'), icone:<GoVerified/>, icon1:<SiGooglemaps/>,  icon2:<BsInfoCircle/>, icon3:<AiOutlineMessage/>},
        {name:"Billy.T", from:"New student from FRANCE", picture: require('../assets/images/billy.jpg'), icone:<GoVerified/>, icon1:<SiGooglemaps/>,  icon2:<BsInfoCircle/>, icon3:<AiOutlineMessage/>},
        {name:"Robert.P", from:"New student from BRAZIL", picture: require('../assets/images/benja.jpg'), icone:<GoVerified/>, icon1:<SiGooglemaps/>,  icon2:<BsInfoCircle/>, icon3:<AiOutlineMessage/>},
        {name:"Chris.B", from:"New student from DRC", picture: require('../assets/images/benja.jpg'), icone:<GoVerified/>, icon1:<SiGooglemaps/>,  icon2:<BsInfoCircle/>, icon3:<AiOutlineMessage/>},
        {name:"Benjamin.Musamba", from:"New student from USA", picture: require('../assets/images/benja.jpg'), icone:<GoVerified/>, icon1:<SiGooglemaps/>,  icon2:<BsInfoCircle/>, icon3:<AiOutlineMessage/>},
    ]



    return(
        
        <div  className={`h-[100%] basis-80`}>
         
            
                {/* Top section */}
                
                <div className="flex justify-between">
                <div className="flex items-center pb-2 basis-1/2">
                    <AiOutlineSearch className="text-slate text-[20px] cursor-pointer icon"/>
                    <input type="text" placeholder="Search your prefer" className="border-none outline-none text-base focus:outline-none bg-transparent" />
                </div>

                <div className="flex gap-2 items-center">
                    <AiOutlineAppstore className="text-cyan-600 cursor-pointer text-[23px] hover:text-[30px] transition-all"/>
                    <button className="rounded-[5px] bg-slate text-white text-base hover:bg-[#55545e] px-2 py-1 transition-all md:block hidden ">Call Leader</button>
                </div>
                </div>
                <div className=" border-b-2"></div>

                {/* title div */}
                <div className="flex items-center justify-between mt-[-4px] sm:">
                    <div className="title">
                        <h1 className="text-[25px] tracking-[2px] font-black ">
                           Home 
                        </h1>
                    <span className="text-[13px] opacity-70 mt-[-4px]">
                        <strong>377 Schools,</strong> find others
                    </span>
                    </div>
                
                <div className="flex items-center justify-between mt-[-2px] ">
                        <div className="px-2 text-center border-r-2 mt-[2px]">
                        <h3 className="text-[15px] font-bold text-cyan-500">54</h3>
                        <h4 className="text-[14px] opacity-70">Students Added</h4>
                         </div>
                        
                         <div className="px-2 text-center border-r-2 mt-[1px]">
                        <h3 className="text-[15px] font-bold text-cyan-500">895</h3>
                        <h4 className="text-[14px] opacity-70">Total Students</h4>
                         </div>
                        
                </div>

                </div>
                {/** slide images */}

                <div className="flex max-w-5xl px-8 max-auto items-center relative">
                    <div className="lg:w-3/2 w-full md:w-1/1 sm:md:w-1/1">

                    <Swiper 
                slidePerview={1.2}
                spaceBetween={4} 
                breakpoints={{
                    768:{
                        slidesPerView: 3, 
                    },
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                    pagination={{
                        clickable: true,
                    
                }} 
                modules={[Pagination, Autoplay]}>
                  { 
                    diapoShow.map((diapo,i)=>(
                        <SwiperSlide key={i}>
                        <div className="flex justify-between h-fit px-4 bg-slate-600 rounded-xl">
                            <div className="">
                            <img alt="" src={diapo.Photo} className="rounded-lg h-[180px]"/>
                            <p className="text-xl my-4"></p>
                            </div>
                            
                        </div>
                        </SwiperSlide>
                    ))}
                        </Swiper>
                        
                    </div>
                </div>

            
               

                    {/*Professor id */}
                    <p className="text-steal text-xl">Ours Professor</p>

                    <div className="mx-start max-w-[50rem]">

                            <div className="flex overflow-x-scroll scrollbar scrollbar-none">
                            
                            <div className="flex  space-x-2">
                            {onlineProfile?.map((online,i) => (
                                <div key={i} className="mt-2">
                                <div className="relative">
                                <div class="
                            before:content-[attr(data-tip)]
                            before:absolute
                            before:px-3 before:py-2
                            before:left-1/2 before:-top-3
                            before:w-max before:max-w-xs
                            before:-translate-x-1/2 before:-translate-y-full
                            before:bg-gray-600 before:text-white
                            before:rounded-md before:opacity-0
                            before:transition-all 
                            
                            after:absolute
                            
                            after:left-1/2 after:-top-3
                            after:h-0 after:w-0
                            after:-translate-x-1/2 after:border-8
                            after:border-t-gray-700 
                            after:border-l-transparent
                            after:border-b-transparent
                            after:border-r-transparent
                            after:opacity-0
                            after:transition-all

                            hover:before:opacity-100 hover:after:opacity-100
                    "
                    data-tip="Improved Workflow">
                                <img src={online.Image} alt="" className="h-14 w-14 rounded-full object-cover border-2 border-gray-400 "/>
                                </div>
                                <div className="bg-green-400 h-2 w-2 rounded-full ml-12 mt-[-18px] relative ring-2"/>
                                {/** <div className=" bg-green-400 h-2 w-2 rounded-full ml-11 mt-[-14px]  ring-2 "/>*/}
                                
                                </div>
                                <h3 className="text-center text-[9px] font-medium opacity-80 mt-[-1px] ">
                                {online?.name}
                             </h3>
                             </div>

                            ))}
                            </div>
                           
                        
                      
                       

                        </div>
                    </div>

                   

                {/* Cards section */}
                <div className="restaurant">
                <div className="flex items-center justify-between">
                    <div className="title mt-[-9px]">
                        <h1 className="text-[20px] font-bold">New Students</h1>
                        <span className="text-[13px] opacity-70"><strong>8 new students added,</strong>
                        we are already to registe the new students</span>
                    </div>

                    <div className="
                            relative
                            before:content-[attr(data-tip)]
                            before:absolute
                            before:px-3 before:py-2
                            before:left-2 before:-top-3
                            before:w-max before:max-w-xs
                            before:-translate-x-1/2 before:-translate-y-full
                            before:bg-gray-600 before:text-white
                            before:rounded-md before:opacity-0
                            before:transition-all 
                            
                            after:absolute
                            after:left-2 after:-top-3
                            after:h-0 after:w-0
                            after:-translate-x-1/2 after:border-8
                            after:border-t-gray-700 
                            after:border-l-transparent
                            after:border-b-transparent
                            after:border-r-transparent
                            after:opacity-0
                            after:transition-all

                            hover:before:opacity-100 hover:after:opacity-100
                    "
                    data-tip="Improved Workflow"
                    >
                    <button className="rounded-[5px] bg-text-white text-base bg-sky-200 hover:bg-[#55545e] px-4 py-2 transition-all md:block hidden focus:outline-none">
                        Show All <AiOutlineArrowRight  className="text-[20px]"/></button>

                    </div>
                    
                </div>
                <div className="mr-[54%] flex justify-start ">
                <div className=" mx-auto flex flex-col justify-center max-w-lg">
                <div className="flex  gap-4 overflow-x-auto">
                
                    <div  className="benja flex flex-row gap-4 overflow-x-auto scrollbar scrollbar-none">
                    {
                        newStudents.map((newStudents, i)=>(
                    <div key={i} className=" ">
                       
                    <div  className="onlyCard studentCards px-1 group ">
                        <div className="relative overflow-hidden">

                        <div className="imgDiv h-[140px] w-48 overflow-hidden rounded-t-lg">
                            <img  src={newStudents.picture} alt="" className="w-full h-full object-cover "/>     
                        </div>

                        <div className="absolute h-[6rem] w-full bg-gradient-to-b from-transparent via-transparent to-black -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all">
                        <h1 className="text-cyan-300 text-sm text-bold mt-[-2.4rem] ml-[11.1rem]">
                                {newStudents.icone}
                       </h1>
                        
                        <div className="flex justify-center mt-24 cursor-pointer space-x-4 hover:text-gray-700 text-white text-[12px]">
                           
                           <p>{newStudents.icon1}</p>
                           <p>{newStudents.icon2}</p>
                           <p>{newStudents.icon3}</p>
                        </div>
                        </div>
                        <div className="absolute inset-0 flex-col items-center justify-center text-center ">
                            
                            
                    
                        </div>
                        </div>
                         <div className=" bg-gray-400 rounded-b-lg">
                        <h1 className="restName text-sm text-slate block text-center font-bold opacity-80">{newStudents.name}</h1>
                        <div className="border-b-[1.5px] py-[1.5px] border-slate rounded-lg"></div>
                        <small className="block text-center text-[#606040] text-sm font-medium">{newStudents.from}</small>
                        <div className="info flex justify-center items-center">
                        </div> 
                        </div>
                     
                    </div>
                       
                        
                        
                    </div>
                     ))}
                </div>
                       
                </div>
            </div>
        </div>
        
                </div>
                
        </div>
    )
}

export default Home;