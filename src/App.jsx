
import { useState } from 'react';
import control from "./assets/images/control.png";
import pin from "./assets/images/pin.png";
import benjami from "./assets/images/benjami.jpeg";
import './App.css';
import Home from './components/Home';


function App() {
  const [open, setOpen] = useState(true);
  const Menus = [
    
    { title:"Home", icon: "Home"},
    { title:"Search", icon: "search" },
    { title:"Register", icon: "person-add-outline" },
    { title:"Payement", icon: "cash-outline"},
    { title:"Reporter", icon: "settings" }
  ]
  return (
    <div className="flex">
      <div className={`${open ? "w-72" : "w-20"} p-3 pt-3 duration-300 w-72 h-screen bg-slate relative`}>
      
    
      <img 
        alt=''
        onClick={()=> setOpen(!open)}
        src={control}
        className={` ${ open ? "rotate-140" : "rotate-180" } absolute cursor-pointer -right-3 top-9 w-7 border-2 border-slate bg-white  rounded-full`}/>
         <div className="flex gap-x-4 items-center">
        <img alt='' src={pin}
        className={` ${ open && "rotate-[360deg]"} cursor-pointer duration-500 w-9 h-9`}/>
        <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>BenSchool</h1>
      </div>

      {/* Profil */}
      <div>
        <div className={`flex justify-center mt-9`}>
          <div className={` h-4 w-4 bg-green-400 absolute top-xl right-28 rounded-full ring-4 md:
           ${!open && "h-2.2 w-2.2 bg-green-400 absolute inset-x-12 rounded-full ring-2 origin-left duration-900"}`}></div>
          <img alt='' src={benjami} className={`w-20 h-20 object-cover rounded-full border-4 border-cyan-100 ${!open && "w-12 h-12 rounded-full border-2"}`}/> 
  
      </div>
        
        <div className={` ${!open && "hidden"} origin-left duration-200 text-center mt-4`}>
        <h4 className="text-gray-500 mt-2">Welcome,</h4>
        <h2 className="text-cyan-600  font-bold">
          Benjamin Mumbita
        </h2>
        <h3 className=" text-sm text-gray-400">
          Front-End Developer</h3>
        </div>
      
      </div>
      <div className="border border-gray-500 rounded mt-4"></div>

      <ul className='pt-6'>
        {Menus.map((menu, index) => (
          <li key={index} 
          className={`text-cyan-700 text-ms font-bold flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md
          ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}>
           <ion-icon name={`${menu.icon}`}></ion-icon>
            <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
          </li>
        ))}
      </ul>
      </div>
     
      
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
       
       
        <Home/>

      </div>
    
    </div>
  );
}

export default App;
