import React, {useEffect} from 'react';
import Portal from "./Portal";


function Modal({closeModal,openModal,children}) {

    const handleKeyDown=(e)=>{
        if (e.key ==='Escape'){
            closeModal();
        }
    };


    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown)
        return()=>window.removeEventListener('keydown', handleKeyDown)
    },[]);


    return (
        <Portal>
            <div className={"overlay"}>
                <div className={"content"}>
                    {children}
                </div>
            </div>
        </Portal>

    )
}

export default Modal;