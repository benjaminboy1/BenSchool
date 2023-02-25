import React from "react";
import { useEffect, useState} from "react";
import {FaCcPaypal, FaMoneyCheckAlt} from "react-icons/fa";

import {DiYii} from "react-icons/di";
import mpesa from "../assets/images/mpesa.png";
import orangemoney from "../assets/images/orangemoney.png";
import {BsCreditCard2Back, BsFillPatchQuestionFill, BsFillCheckSquareFill} from "react-icons/bs";
import {AiFillWarning, AiOutlineWechat, AiTwotonePrinter, AiOutlineBarChart, AiOutlineFileExcel} from "react-icons/ai";
import {GoVerified} from "react-icons/go";
import prof4 from "../assets/images/prof4.jpeg";
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'



const Payment = ()=>{

    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");


    useEffect(()=> {
        setTimeout(() => {
            setLoading(true);
            setTitle("PAYMENT");
            setName("Benjamin. Mumbita");
            
        }, 5000)
    })

    const liens = [ 
        {icons:<AiOutlineWechat/>},
        {icons:<AiFillWarning/>},
        {icons:<AiOutlineBarChart/>},
   
    ]

    const details =[
        {names: "First slice",  name: "Enrollment"},
        {names: "Second slice", name: "Enrollment"},
        {names: "Third slice",  name: "Enrollment"},
    ]

 
    return(
     
            
        <div className="flex py-2 justify-center md:space-x-8">
            
            
            {/**first card */}
        <div className="py-1 px-8 border-2 rounded-md border-cyan-300 ">
            <div>
                <p className="text-center py-2 text-xl">{title || <Skeleton  className="w-full"/>}</p>
                <div className="flex gap-2 grid md:grid-cols-2">
                    <div className="mb-2">
                        
                        {loading ? (<input type="number" className="dark:bg-gray-700 bg-gray-300 h-8 text-sm rounded-lg block w-full p-2 dark:placeholder-gray-400 placeholder-gray-500 dark:focus:ring-blue-500 " placeholder="Id student" required/>) : ( <Skeleton width="10rem" className="h-8 w-full"/> 
                         )}
                    </div>
                    <div className="mb-2">
                        
                        {loading ? (<input type="text" className="dark:bg-gray-700 bg-gray-300 h-8 text-sm rounded-lg block w-full p-2 dark:placeholder-gray-400 placeholder-gray-500 dark:focus:ring-blue-500 " placeholder="First Name" required/>) : ( <Skeleton className="h-8 w-full"/> 
                         )}
                    </div>
                    <div className="mb-2">
                        
                        {loading ? (<input type="number" className="dark:bg-gray-700 bg-gray-300 h-8 text-sm rounded-lg block w-full p-2 dark:placeholder-gray-400 placeholder-gray-500 dark:focus:ring-blue-500 " placeholder="Midle Name" required/>) : ( <Skeleton className="h-8 w-full"/> 
                         )}
                    </div>
                    <div className="mb-2">
                        
                        {loading ? (<input type="number" className="dark:bg-gray-700 bg-gray-300 h-8 text-sm rounded-lg block w-full p-2 dark:placeholder-gray-400 placeholder-gray-500 dark:focus:ring-blue-500 " placeholder="Second Name" required/>) : ( <Skeleton className="h-8 w-full"/> 
                         )}
                    </div>
                    <div className="mb-2">
                        
                        {loading ? (<input type="number" className="dark:bg-gray-700 bg-gray-300 h-8 text-sm rounded-lg block w-full p-2 dark:placeholder-gray-400 placeholder-gray-500 dark:focus:ring-blue-500 " placeholder="Id student" required/>) : ( <Skeleton className="h-8 w-full"/> 
                         )}
                    </div>
                    <div className="mb-2">
                        
                        {loading ? (<input type="number" className="dark:bg-gray-700 bg-gray-300 h-8 text-sm rounded-lg block w-full p-2 dark:placeholder-gray-400 placeholder-gray-500 dark:focus:ring-blue-500 " placeholder="Id student" required/>) : ( <Skeleton className="h-8 w-full"/> 
                         )}
                    </div>

                </div>
                <div>
                    <div>
                        {loading ? (<p className="text-center py-2">Payment Methode</p>) : (<Skeleton height={25} width={200} className="ml-[5rem]"/>)}
                    </div>
                    
                    <div className=" ">
                        <div className="">
                         
                            <div className="cards flex justify-between">
                            <div>{loading ? ( <FaCcPaypal className="text-[50px] md:text-20 hover:text-cyan-300"/>) : (<Skeleton height={45} width={65}/>)}</div>
                            <div>{loading ? (<img src={orangemoney} className="h-10"/>) : (<Skeleton height={45} width={65}/>)}</div>
                            <div>{loading ? (<img src={mpesa} className="h-10"/>) : (<Skeleton height={45} width={65}/>)}</div>
                            <div>{loading ? (<BsCreditCard2Back className="text-[50px] md:text-20 hover:text-cyan-300"/>) : (<Skeleton height={45} width={65}/>)}</div>
                            </div>
                           
                            
                        </div>
                        <div className="border2 border:bg-gray-300"></div>
                    </div>
                </div>
                <div>
                    <div className="">
                        {loading ? (<p className="text-center py-2">Info Card</p>) : (<Skeleton height={28} width={100} className="ml-[8rem]"/>)}
                    </div>
                    
                    <div className="flex grid md:grid-cols-2 gap-2">
                    <div className="mb-2">
                        {loading ? (<input type="number" className="h-8 w-full dark:bg-gray-700 text-sm p-2 rounded-lg bg-gray-300 dark:placeholder-gray-400 placeholder-gray-500" placeholder="Card number"/>) : ( <Skeleton className="h-8 w-full"/>)

                        }
                        
                    </div>
                    <div className="mb-2">
                        {loading ? (    <input list="motif" type="text" className="h-8 w-full dark:bg-gray-700 text-sm p-2 rounded-lg bg-gray-300 dark:placeholder-gray-400 placeholder-gray-500" placeholder="Card CVC"/>) : (<Skeleton className="h-8 w-full" />)}
                    
                        <datalist id="motif">
                            <option value="School fees"></option>
                            <option value="School fees"></option>
                            <option value="School fees"></option>
                        </datalist>
                    </div>
                    <div className="mb-2">
                        {loading ? (<select class="h-8 w-full text-sm px-4 text-gray-700 bg-gray-300 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500
                        dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Motif">
                         <option className="text-center">Motif</option>
                         <option>Controle($50)</option>
                         <option>First slice($200)</option>
                         <option>Second slice($200)</option>
                         <option>Third slice($100)</option>  
                       </select>) : (<Skeleton className="h-8 w-full"/>)}
                       
                    </div>
                    <div className="mb-2">
                        {loading ? (<input  type="date" className="h-8 w-full dark:bg-gray-700 text-sm p-2 rounded-lg bg-gray-300 dark:placeholder-gray-400 placeholder-gray-500" placeholder="Date"/>) : (<Skeleton className="h-8 w-full"/>)}
                        
                    </div>
                    </div>
                    
                </div>
                <div className="text-center py-1">
                    {loading ? (<button   className="bg-green-700 px-4 text-lg hover:bg-green-800 rounded ">Pay Now!</button>) : (<Skeleton height={40} width={100} className="h-8 w-5"/>)}
                    
                </div>
                <div className="">{
                    loading ? (<div className="flex justify-end"><BsFillPatchQuestionFill className="hover:text-cyan-400"/></div>) : (<Skeleton margin-right={40} border-Radius={10} width={30} height={30} className="ml-[20rem] "/>)
                }
                    
                </div>
            </div>
             
        </div> 

        {/**second card */}
        <div className="ms:block hidden md:block">
            <div className="border-cyan-400 border-2 p-4 rounded-lg">
                <div className="">
                <div>
                    {loading ? (<p className="text-xl text-center">RESULT</p>) : (<Skeleton height={30} width={100} className="ml-[12rem]"/>)}
                </div>
                    
                    <div className="border-cyan-300 border-2 rounded mt-10">
                        <div className="ml-8 mt-[-2rem]">{
                            loading ? (<img src={prof4} className="h-20 w-20 rounded-full border-2 border-cyan-300 skeleton"/>) : (<Skeleton height={80} width={80} circle={true} />)
                        }
                            
                        </div>
                        <div  className="px-4 ml-[10rem] mt-[-2.6rem]">
                        <div className="text-sm flex space-x-2">
                            {loading ? (<h2>Benjamin. Mumbita</h2> ) : (<Skeleton width={200} height={15} className="h-4 w-full"/>)

                           
                            }
                            <h4 className="text-sm mt-1 text-cyan-400">
                                {loading ? (<GoVerified/>) : (<Skeleton/>)}</h4>
                            
                        </div>
                        <div className="mb-2">
                            {loading ? (<p className="text-sm opacity-80">@Dev. Mobile 1st</p>) : (<Skeleton height={15} width={150} className="top-[-0.4rem]"/>)}
                            {loading ? (<p className="text-sm opacity-50">benjaminmumbita10.@gmail.com</p>) : (<Skeleton height={15} width={215} className="top-[-0.8rem]"/>)}
                            
                        </div>
                        </div>
                        <div>
                            {loading ? (<div className="flex space-x-4 ml-5 mt-[-2rem] p-2">{
                            liens.map((liens, i)=>(
                                <p className="hover:text-cyan-400" key={i}>
                                    {liens.icons}
                                </p>
                            )
                            )
                            }
                            
                        </div>) : (<Skeleton width={100} className="ml-[2rem] top-[-2rem]" />)}
                        </div>
                        
                        <div className="border border-dashed"></div>
                        <div className="text-sm opacity-80 ml-14 mr-28 p-2">
                            {
                                details.map((details, i)=>(
                            <div key={i}>
                                {loading ? (<div className="flex justify-between">
                              <h3 className="flex"><h5 className="mr-2 mt-1"><BsFillCheckSquareFill/></h5>{details.names}</h3>
                               <h3 className="flex"><h5 className="mr-2 mt-1"><BsFillCheckSquareFill/></h5>{details.name}</h3>
                               </div>) : (<Skeleton width={300} height={15} className="tspace-y-4"/>)}
                              
                            </div>
                                ))
                            }
                            
                        </div>
                        

                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="">
                            {loading ? (<button className="bg-red-400 px-8 text-lg hover:bg-red-500 rounded">
                            <h6 className="ml-5"><AiOutlineFileExcel/></h6>Cancel</button>) : (<Skeleton height={40} width={110}/>)}
                        </div>
                        <div>
                            {loading ? (<button className="bg-green-500 px-8 text-lg hover:bg-green-600 rounded"><h6 className="ml-3"><AiTwotonePrinter/></h6>Print</button>) : (<Skeleton height={40} width={110}/>)}
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>


          
            
        </div>
    )
}

export default Payment;
