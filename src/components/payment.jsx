import React from "react";
import {FaPaypal, FaMoneyCheckAlt} from "react-icons/fa";
import {FcMoneyTransfer} from "react-icons/fc";
import {DiYii} from "react-icons/di";
import {BsFillPatchQuestionFill, BsFillCheckSquareFill} from "react-icons/bs";
import {AiFillWarning, AiOutlineWechat, AiTwotonePrinter, AiOutlineBarChart, AiOutlineFileExcel} from "react-icons/ai";
import {GoVerified} from "react-icons/go";
import prof4 from "../assets/images/prof4.jpeg";



const Payment = ()=>{

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
                <p className="text-center py-2 text-xl">PAYMENT</p>
                <div className="flex gap-2 grid md:grid-cols-2">
                    <div className="mb-2">
                        <input type="number" className="dark:bg-gray-700 bg-gray-300 h-8 text-sm rounded-lg block w-full p-2 dark:placeholder-gray-400 placeholder-gray-500 dark:focus:ring-blue-500 " placeholder="Id student" required/>
                    </div>
                    <div className="mb-2">
                        <input text="number" className="dark:bg-gray-700 bg-gray-300 h-8 text-sm rounded-lg block w-full p-2 dark:placeholder-gray-400 placeholder-gray-500 dark:focus:ring-blue-500 " placeholder="Id student" required/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="dark:bg-gray-700 bg-gray-300 h-8 text-sm rounded-lg block w-full p-2 dark:placeholder-gray-400 placeholder-gray-500 dark:focus:ring-blue-500 " placeholder="Id student" required/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="dark:bg-gray-700 bg-gray-300 h-8 text-sm rounded-lg block w-full p-2 dark:placeholder-gray-400 placeholder-gray-500 dark:focus:ring-blue-500 " placeholder="Id student" required/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="dark:bg-gray-700 bg-gray-300 h-8 text-sm rounded-lg block w-full p-2 dark:placeholder-gray-400 placeholder-gray-500 dark:focus:ring-blue-500 " placeholder="Id student" required/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="dark:bg-gray-700 bg-gray-300 h-8 text-sm rounded-lg block w-full p-2 dark:placeholder-gray-400 placeholder-gray-500 dark:focus:ring-blue-500 " placeholder="Id student" required/>
                    </div>

                </div>
                <div>
                    <p className="text-center py-2">Payment Methode</p>
                    <div className=" ">
                        <div className="cards flex justify-between ">
                            <div className=""><FaPaypal className="text-[50px] md:text-20 hover:text-cyan-300"/></div>
                            <div><FaMoneyCheckAlt className="text-[50px] md:text-20 hover:text-cyan-300"/></div>
                            <div><FcMoneyTransfer className="text-[50px] md:text-20 hover:text-cyan-300"/></div>
                            <div><DiYii className="text-[50px] md:text-20 hover:text-cyan-300"/></div>
                        </div>
                        <div className="border2 border:bg-gray-300"></div>
                    </div>
                </div>
                <div>
                    <p className="text-center py-2">Info Card</p>
                    <div className="flex grid md:grid-cols-2 gap-2">
                    <div className="mb-2">
                        <input type="number" className="h-8 w-full dark:bg-gray-700 text-sm p-2 rounded-lg bg-gray-300 dark:placeholder-gray-400 placeholder-gray-500" placeholder="Card number"/>
                    </div>
                    <div className="mb-2">
                        <input list="motif" type="text" className="h-8 w-full dark:bg-gray-700 text-sm p-2 rounded-lg bg-gray-300 dark:placeholder-gray-400 placeholder-gray-500" placeholder="Card CVC"/>
                        <datalist id="motif">
                            <option value="School fees"></option>
                            <option value="School fees"></option>
                            <option value="School fees"></option>

                        </datalist>
                    </div>
                    <div className="mb-2">
                       <select class="h-8 w-full text-sm px-4 text-gray-700 bg-gray-300 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500
                        dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Motif">
                         <option className="text-center">Motif</option>
                         <option>Controle($50)</option>
                         <option>First slice($200)</option>
                         <option>Second slice($200)</option>
                         <option>Third slice($100)</option>
                         
                       </select>
                    </div>
                    <div className="mb-2">
                        <input  type="date" className="h-8 w-full dark:bg-gray-700 text-sm p-2 rounded-lg bg-gray-300 dark:placeholder-gray-400 placeholder-gray-500" placeholder="Date"/>
                    </div>
                    </div>
                    
                </div>
                <div className="text-center py-1">
                    <button   className="bg-green-700 px-4 text-lg hover:bg-green-800 rounded ">Pay Now!</button>
                </div>
                <div>
                    <div className="flex justify-end"><BsFillPatchQuestionFill className="hover:text-cyan-400"/></div>
                </div>
            </div>
             
        </div> 

        {/**second card */}
        <div className="ms:block hidden md:block">
            <div className="border-cyan-400 border-2 p-4 rounded-lg">
                <div className="">
                    <p className="text-xl text-center">RESULT</p>
                    <div className="border-cyan-300 border-2 rounded mt-10">
                        <div className="ml-8 mt-[-2rem] ">
                            <img src={prof4} className="h-20 w-20 rounded-full border-2 border-cyan-300"/>
                        </div>
                        <div  className="px-4 ml-[10rem] mt-[-2.6rem]">
                        <div className="text-sm flex space-x-2">
                            <h2>Benjamin. Mumbita</h2> <h4 className="text-sm mt-[0.2rem] text-cyan-400"><GoVerified/></h4>
                        </div>
                        <div className="mb-2">
                            <p className="text-sm opacity-80">@Dev. Mobile 1st</p>
                            <p className="text-sm opacity-50">benjaminmumbita10.@gmail.com</p>
                        </div>
                        </div>

                        <div className="flex space-x-4 ml-5 mt-[-2rem] p-2">{
                            liens.map((liens, i)=>(
                                <p className="hover:text-cyan-400" key={i}>
                                    {liens.icons}
                                </p>
                            )
                            )
                            }
                            
                        </div>
                        <div className="border border-dashed"></div>
                        <div className="text-sm opacity-80 ml-14 mr-28 p-2">
                            {
                                details.map((details, i)=>(
                            <div key={i}>
                              <div className="flex justify-between">
                              <h3 className="flex"><h5 className="mr-2 mt-1"><BsFillCheckSquareFill/></h5>{details.names}</h3>
                               <h3 className="flex"><h5 className="mr-2 mt-1"><BsFillCheckSquareFill/></h5>{details.name}</h3>
                               </div>
                            </div>
                                ))
                            }
                            
                        </div>
                        

                    </div>
                    <div className="flex justify-between mt-4">
                        <button className="bg-red-400 px-8 text-lg hover:bg-red-500 rounded"><h6 className="ml-5"><AiOutlineFileExcel/></h6>Cancel</button>
                        <button className="bg-green-500 px-8 text-lg hover:bg-green-600 rounded"><h6 className="ml-3"><AiTwotonePrinter/></h6>Print</button>
                    </div>
                </div>

            </div>
        </div>
        
            
        </div>
    )
}

export default Payment;
