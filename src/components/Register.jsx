import React from "react";
import anonymes from "../assets/images/anonymes.jpeg";
import {MdAddAPhoto} from "react-icons/md";


const Register = ()=>{
 
    return(
        <div>
            
            <div className="flex mb-1 justify-center">
            REGISTER
            </div>
            
            <div className="flex justify-center">
                {/**Resgister card */}
                
        <div className="py-2 px-14 border-2 rounded-md border-cyan-300  ">
                    <div>
                        <div className="flex justify-center mt-[2]">
                           
                             <img alt="" src={anonymes} className="w-28 h-28 rounded-full rounded-full border-2 border-dashed border-cyan-400"/>
                             <div className="mt-24 mr-2.8 absolute" type="file" for="file-input">
                              
                                        <div className="image-upload">
                                           <label>
                                            <MdAddAPhoto className="text-cyan-400 hover:text-gray-400 cursor-pointer" type="image" for="small-size" data-dropdown-toggle="dropdown"/>
                                            <input id="file-input" type="file"  className=""/>
                                           </label>
                                              
                                        </div>
                                </div>
                           
                           
                        </div>
                    </div>
        <div>
          <div class="mt-[-0.5rem]">
             <label for="id" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Id</label>
             <input type="number" id="id" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Id student" required="This Id case must be fill out!"/>
          </div> 
        </div>

        <div class="grid gap-4 mb-2 md:grid-cols-2">
        <div className="mb-1">
            <label for="first_name" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div className="mb-1">
            <label for="midle_name" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Midle name</label>
            <input type="text" id="midle_name" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div className="mt-[-1rem]">
            <label for="Last_name" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="Last_name" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div className="mt-[-1rem]">
       

        
  <div class="datepicker  form-floating " data-mdb-toggle-button="false">
  <label for="midle_name" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Midle name</label>
    <input type="date"
      class="form-control h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" data-mdb-toggle="datepicker" />


</div>

        </div>
        <div className="mt-[-1rem]">
            <label for="nationality" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">nationality</label>
            <input type="text" id="last_name" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <div className="mt-[-1rem]">
            <label for="Email_address" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
            <input type="text" id="email_address" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
        </div>  
        
        <div className="mt-[-1rem]">
            <label for="phone" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div className="mt-[-1rem]">
            <label for="website" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
            <input type="url" id="website" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
        </div>
        
    </div>
    <div className="mt-[-0.6rem]">
        <label className="text-sm flex text-center justify-center">Gender </label>
            
             <div className="flex flex-wrap items-center justify-center mb-2 ">
            
              <div class="flex items-center mr-4">
                  <input id="green-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="green-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
              </div>
              <div class="flex items-center mr-4">
                  <input id="green-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="green-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
              </div>
              <div class="flex items-center mr-4">
                   <input id="red-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="red-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
              </div>
            </div>
        
       
    </div>

    <div class="mt-[-1rem]">
        <label for="Adress" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Adress</label>
        <input type="adress" id="adress" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Adress" required/>
    </div> 
    <div class="mb-2">
        <label for="level" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Level</label>
        <input type="level" id="level" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1st. Dev. web" required/>
    </div> 
    <div className="flex space-x-2 grid md:grid-cols-2">
    <div className="mt-[-0.4rem]">
            <label for="phone" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div className="mt-[-0.4rem]">
            <label for="website" class="block mb-[-1] text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
            <input type="url" id="website" class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
        </div>
        </div>
   
    <div class="flex items-start mt-2">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#agree" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
                <div className="flex justify-center mt-2">
                    <button className="text-base bg-cyan-600 px-8 rounded hover:bg-sky-700">Submit</button>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Register;
