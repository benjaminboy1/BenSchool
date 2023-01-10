
import { useState } from 'react';
import control from "./assets/images/control.png";
import pin from "./assets/images/pin.png";
import './App.css';

function App() {
  const [open, setOpen] = useState(true);
  const Menus = [
    
    { title:"Home", icon: "Home"},
    { title:"Search", icon: "search" },
    { title:"Register", icon: "person-add-outline" },
    { title:"Payement", icon: "cash-outline", gap: true },
    { title:"Reporter", icon: "settings" }
  ]
  return (
    <div className="flex">
      <div className={`${open ? "w-72" : "w-20"} p-3 pt-3 duration-300 w-72 h-screen bg-dark-purple relative`}>
      
    
      <img 
        onClick={()=> setOpen(!open)}
        src={control}
        className={` ${ open ? "rotate-140" : "rotate-180" } absolute cursor-pointer -right-3 top-9 w-7 border-2 bg-dark-purple  rounded-full`}/>
         <div className="flex gap-x-4 items-center">
        <img src={pin}
        className={` ${ open ? "rotate-140" : "rotate-180"} cursor-pointer duration-500 w-9 h-9`}/>
        <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>BenSchool</h1>
      </div>

      <ul className='pt-6'>
        {Menus.map((menu, index) => (
          <li key={index} 
          className={`text-cyan-800 text-ms flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md
          ${menu.gap ? "mt-9" : "mt-2"}`}>
           <ion-icon name={`${menu.icon}`}></ion-icon>
            <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
          </li>
        ))}
      </ul>
      </div>
     
      
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
       
        <hi>Home Page</hi>

      </div>
    
    </div>
  );
}

export default App;
