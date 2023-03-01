import React from "react";


const Modalpm = ({ visible, onClose}) => {
   
    const handleOnclose = (e) => {
        if (e.target.id === "things")
             onClose();
        };

    if(!visible) return null;

    return(


        <div id="things" onClick={handleOnclose} className="flex fixed justify-center mt-[8rem]">
            <div className="border w-full max-w-[30rem] shadow-lg rounded-md bg-white dark:bg-slate inset-0">

                <div className="text-center items-center justify-center">
                    <div className="flex justify-center py-2">
                        <p className="text-center h-9 w-9 rounded-full bg-red-100">
                            <div className="mt-0.5 text-red-400">
                            <ion-icon name="warning-outline"></ion-icon>
                            </div>
                        
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-sm text-base opacity-80 py-1">Payment unsucced</p>
                </div>
                <div className="text-center p-3">
                <h5 className="text-sm opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                 Assumenda, amet omnis molestias aspernatur<br/> quia ducimus neque architecto 
                     possimus ut incidunt</h5>
                </div>
                <div className="flex justify-center py-2">
                    <button id="things" className="rounded p-2 text-sm bg-blue-500 hover:bg-blue-600 transition-200" onClick={onclose}>Understood</button>
                </div>
            </div>
        </div>
    )}




export default Modalpm;