import React from "react";
import anonymes from "../assets/images/anonymes.jpeg";
import {MdAddAPhoto} from "react-icons/md";


const Register = ()=>{
    return(
        <div>
            <div>
            Register
            </div>
            <div className="flex justify-center">
                {/**Resgister card */}
        <div className="py-2 px-14 border-2 rounded-md border-cyan-300  ">
                    <div>
                        <div className="flex justify-center mb-2">
                             <img alt="" src={anonymes} className="w-28 h-28 rounded-full rounded-full border-2 border-dashed border-cyan-400"/>
                             <div className="mt-24 mr-2.8 absolute "><MdAddAPhoto className="text-cyan-400 hover:text-gray-400"/></div>
                        </div>
                    </div>
        <div class="grid gap-4 mb-2 md:grid-cols-2">
        <div className="mb-1">
            <label for="first_name" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div className="mb-1">
            <label for="midle_name" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Midle name</label>
            <input type="text" id="midle_name" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div className="mb-1">
            <label for="Last_name" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="Last_name" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div className="mb-1">
            <label for="birth" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Birth</label>
            <input type="number" id="birth" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
        <div className="mb-1">
            <label for="nationality" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">nationality</label>
            <input type="text" id="last_name" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <div className="mb-1">
            <label for="Email_address" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
            <input type="text" id="email_address" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
        </div>  
        
        <div className="mb-1">
            <label for="phone" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div className="mb-1">
            <label for="website" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
            <input type="url" id="website" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
        </div>
        
    </div>
    <div className="mb-[-2]">
        <label className="text-base flex text-center justify-center">Gender </label>
        <div className="mt-[-1rem]">
        <span className="text-sm px-2 mb-4">male</span>
        <input type="checkbox" className=" rounded-full"/>
        </div>
        
       
    </div>

    <div class="mb-2">
        <label for="Adress" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Adress</label>
        <input type="adress" id="adress" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Adress" required/>
    </div> 
    <div class="mb-2">
        <label for="level" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Level</label>
        <input type="level" id="level" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1st. Dev. web" required/>
    </div> 
    <div class="mb-2">
        <label for="password" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    <div class="mb-2">
        <label for="confirm_password" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
        <input type="password" id="confirm_password" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    <div class="flex items-start mb-4">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Register;
