import React from "react";
import { useState, useEffect } from "react";
import anonymes from "../assets/images/anonymes.jpeg";
import {MdAddAPhoto} from "react-icons/md";
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'



const Register = ()=>{
        const [loading, setLoading] = useState(false);
        const [title, setTitle] = useState("");

        useEffect(()=>{
            setTimeout(()=>{
                setLoading(true);
                setTitle("REGISTER")
            }, 5000)
        })
       



 
    return(
        <div>
            
            <div className="flex mb-1 justify-center">
               
            <p> {title || <Skeleton width={130} height={25} className="px-4"/>}</p>
            </div>
            
            <div className="flex justify-center">
                {/**Resgister card */}
                
        <div className="py-1 px-4 border-2 rounded-md border-cyan-300  ">
                    <div>
                        <div className="flex justify-center mt-[2]">
                            <div>
                                {loading ? ( <img alt="" src={anonymes} className="w-28 h-28 rounded-full rounded-full border-2 border-dashed border-cyan-400"/>) : (<Skeleton width={105} height={105} circle className="h-28 w-28"/>)}
                            </div>
                            <div>
                                
                            </div>
                             <div className="mt-24 mr-2.8 absolute" type="file" for="file-input">
                              
                                        <div className="image-upload">
                                           <label>
                                            <div>
                                                {loading ? (<MdAddAPhoto className="text-cyan-400 hover:text-gray-400 cursor-pointer" type="image" for="small-size" data-dropdown-toggle="dropdown"/>) : (<Skeleton width={25} height={15} className="top-[-0.4rem]"/>)}
                                            </div>
                                            
                                            <input id="file-input" type="file"  className=""/>
                                           </label>
                                              
                                        </div>
                                </div>
                           
                           
                        </div>
                    </div>
        <div>
          <div class="mt-[-0.5rem]">
            <div>
                {loading ? (<label for="id" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Id</label>) : (<Skeleton height={20} width={20} className="top-[0.5rem]" />)}
            </div>
             <div>
                {loading ? (<input type="number" id="id" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Id student" required="This Id case must be fill out!"/>) : (<Skeleton height={30} width={410}/>)}
            </div>
             </div> 
        </div>

        <div class="grid gap-4 mb-2 md:grid-cols-2">
        <div className="mb-1">
            <div>
            
                {loading ? (<label for="first_name" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">First name</label>) : (<Skeleton width={50} height={15} className="top-[-0.4rem]" />)}
            </div>
            <div>
                {loading ? (<input type="text" id="first_name" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />) : (<Skeleton width={200} height={30} className="top-[-0.9rem]" />)}
            </div>
            
        </div>
        <div className="mb-1">
            <div>
            
                {loading ? (<label for="first_name" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">First name</label>) : (<Skeleton width={70} height={15} className="top-[-0.4rem]" />)}
            </div>
            <div>
                {loading ? (<input type="text" id="first_name" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />) : (<Skeleton width={200} height={30} className="top-[-0.9rem]" />)}
            </div>
            
        </div>
        <div className="mt-[-1rem]">
            <div>
                {loading ? (<label for="Last_name" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Last name</label>) : (<Skeleton width={70} height={15} className="top-[-1.4rem]"/>)}
            </div>
            <div>
                {loading ? ( <input type="text" id="Last_name" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>) : (<Skeleton width={200} height={30} className="top-[-1.9rem]" />)}
            </div>
        </div>
        <div className="mt-[-1rem]">
       

        
  <div class="datepicker  form-floating " data-mdb-toggle-button="false">
    <div>
        {loading ? (<label for="date" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Date</label>) : (<Skeleton width={70} height={15} className="top-[-1.4rem]" />)}
    </div>
    <div>
        {loading ? ( <input type="date"
      class="form-control h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" data-mdb-toggle="datepicker" />) : (<Skeleton width={200} height={30} className="top-[-1.9rem]" />)}
    </div>


</div>

        </div>
        <div className="mt-[-1rem]">
            <div>
                {loading ? (<label for="Nationality" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Nationality</label>) : (<Skeleton width={70} height={15} className="top-[-2rem]"/>)}
            </div>
            <div>
                {loading ? ( <input type="text" id="Nationality" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nationality" required/>) : (<Skeleton width={200} height={30} className="top-[-2.5rem]" />)}
            </div>
        </div>
        <div className="mt-[-1rem]">
            <div>
                {loading ? (<label for="Email_Adress" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Email Adress</label>) : (<Skeleton width={70} height={15} className="top-[-2rem]"/>)}
            </div>
            <div>
                {loading ? ( <input type="text" id="Email_Adress" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Adress" required/>) : (<Skeleton width={200} height={30} className="top-[-2.5rem]" />)}
            </div>
        </div> 
        
        <div className="mt-[-1rem]">
            <div>
                {loading ? (<label for="phone" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Phone number</label>) : (<Skeleton width={70} height={15} className="top-[-2.5rem]"/>)}
            </div>
            <div>
                {loading ? (<input type="tel" id="phone" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>) : (<Skeleton width={200} height={30} className="top-[-3rem]" />)}
            </div>
            
        </div>
        <div className="mt-[-1rem]">
            <div>
                {loading ? (<label for="website" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Website URL</label>) : (<Skeleton width={70} height={15} className="top-[-2.5rem]"/>)}
            </div>
            
            <div>
                {loading ? (<input type="url" id="website" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>) : (<Skeleton width={200} height={30} className="top-[-3rem]" />)}
            </div>
            
        </div>
        
    </div>
    <div className="mt-[-0.6rem]">
       <div>
        {loading ? ( <label className="text-sm flex text-center justify-center">Gender </label>) : (<Skeleton width={100} height={25} className="top-[-2.9rem] left-[9.8rem]"/>)}
       </div>
            
             <div className="flex flex-wrap items-center justify-center mb-4 ">
            
              <div class="flex items-center mr-4">
                <div>
                    {loading ? (<input id="green-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>) : (<Skeleton width={20} height={20} className="top-[-3rem]"/>)}
                </div>
                  <ddiv>
                    {loading ? (<label for="green-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>) : (<Skeleton width={60} height={20} className="top-[-3rem] left-[4px]"/>)}
                  </ddiv>
                  
              </div>
              <div class="flex items-center mr-4">
                <div>
                    {loading ? ( <input id="green-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>) : (<Skeleton width={20} height={20} className="top-[-3rem]" />)}
                </div>
                <div>
                    {loading ? (<label for="green-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>) : (<Skeleton width={60} height={20} className="top-[-3rem] left-[4px]"/>)}
                </div>
              </div>
              <div class="flex items-center mr-4">
                <div>
                    {loading ? ( <input id="red-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>) : (<Skeleton width={20} height={20} className="top-[-3rem]"/>)}
                </div>
                  <div>
                    {loading ?  (<label for="red-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>) : (<Skeleton width={60} height={20} className="top-[-3rem] left-[4px]" />)}
                  </div>
              </div>
            </div> 
      </div>

    <div class="mt-[-1.9rem]">
        <div>
            {loading ? (<label for="Adress" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Adress</label>) : (<Skeleton width={50} height={20} className="top-[-2.8rem]"/>)}
        </div>
        <div>
            {loading ? (<input type="adress" id="adress" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Adress" required/>) : (<Skeleton width={410} height={30}  className="top-[-3.2rem]"/>)}
        </div>
        
    </div> 
    <div class="mb-2">
        <div>
            {loading ? ( <label for="level" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Level</label>) : (<Skeleton width={50} height={20} className="top-[-3.3rem]"/>)}
        </div>
       <div>
            {loading ? (<input type="level" id="level" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1st. Dev. web" required/>) : (<Skeleton width={410} height={30} className="top-[-3.7rem]"/>)}
       </div>
        
    </div> 
    <div className="flex space-x-2 grid md:grid-cols-2">
    <div className="mt-[-0.4rem]">
        <div>
            {loading ? (<label for="phone" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Phone number</label>) : (<Skeleton width={60} height={20} className="top-[-3.8rem]"/>)}
        </div>
        <div>
            {loading ? (<input type="tel" id="phone" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>) : (<Skeleton width={200} height={30} className="top-[-4.2rem]"/>)}
        </div>    
        </div>
        <div className="mt-[-0.4rem]">
            <div>
                {loading ? (<label for="website" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Website URL</label>) : (<Skeleton width={60} height={20} className="top-[-3.8rem]"/>)}
            </div>
            <div>
                {loading ?  ( <input type="url" id="website" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>) : (<Skeleton width={200} height={30} className="top-[-4.2rem]"/>)}
            </div>
        </div>
        </div>
   
    <div class="flex items-start mt-1">
        <div class="flex items-center h-5">
            <div>
                {loading ? (<input id="remember" type="checkbox" value="" class="w-4 h-4 mt-[1rem] border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>) : (<Skeleton  width={18} height={20} className="top-[-4rem] left-[-1.8px]"/>)}
            </div>
            <div>
            {loading ? (<label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#agree" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>) : (<Skeleton width={300} height={20} className="top-[-4rem] left-[2px]"/>)}
        </div>
        </div>  
    </div>
                <div className="flex justify-center mt-1">
                    <div>
                        {loading ? (<button className="text-base bg-cyan-600 px-8 rounded hover:bg-sky-700">Submit</button>) : (<Skeleton width={100} height={25} className="top-[-4rem]" />)}
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Register;
