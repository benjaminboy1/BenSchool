import React from "react";
import {FaPaypal, FaMoneyCheckAlt} from "react-icons/fa";
import {FcMoneyTransfer} from "react-icons/fc";
import {DiYii} from "react-icons/di";
import {BsFillPatchQuestionFill} from "react-icons/bs";



const Payment = ()=>{
 
    return(
     
            
        <div className="flex ">
            
            
           
        <div className="py-2 px-8 border-2 rounded-md border-cyan-300  ">
            <div>
                <p className="text-center mt-2 py-2">PAYMENT</p>
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
                            <div className=""><FaPaypal  className="text-[50px] md:text-20 hover:text-cyan-300"/></div>
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
                        <input type="text" className="h-8 w-full dark:bg-gray-700 text-sm p-2 rounded-lg bg-gray-300 dark:placeholder-gray-400 placeholder-gray-500" placeholder="Card CVC"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="h-8 w-full dark:bg-gray-700 text-sm p-2 rounded-lg bg-gray-300 dark:placeholder-gray-400 placeholder-gray-500" placeholder="motive"/>
                    </div>
                    <div className="mb-2">
                        <input list="motif" type="date" className="h-8 w-full dark:bg-gray-700 text-sm p-2 rounded-lg bg-gray-300 dark:placeholder-gray-400 placeholder-gray-500" placeholder="Date"/>
                        <datalist id="motif">
                            <option value="School fees"></option>
                            <option value="School fees"></option>
                            <option value="School fees"></option>

                        </datalist>
                    </div>
                    </div>
                    
                </div>
                <div className="text-center py-2">
                    <butto  className="bg-green-700 px-4 rounded ">Pay Now!</butto>
                </div>
                <div>
                    <div className="flex justify-end"><BsFillPatchQuestionFill className="hover:text-cyan-400"/></div>
                </div>
            </div>
             
        </div> 
            
        </div>
    )
}

export default Payment;
