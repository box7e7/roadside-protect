

import { useEffect } from "react"
import AlertComponent from "../components/AlertComponent"

const alertFunc=()=>{
    clearTimeout()
    let btn=document.getElementById("alert0")
    let pr=document.getElementById("progress0")
    btn.classList.remove("hidden")
    pr.classList.remove('progress0')
    btn.classList.remove("animate-wiggle")
    setTimeout(()=>{
        btn.classList.add("animate-wiggle")
        pr.classList.add('progress0')
    },100)

}  




export default function Anim(){

useEffect(()=>{
    let pr=document.getElementById("progress0")
    pr.addEventListener('animationend', () => {
    console.log('Animation ended');
    let btn=document.getElementById("alert0")
    btn.classList.add("hidden")
      });
},[])


    return(
        
        <div className="flex items-center justify-center w-full h-full">
            
            <AlertComponent/>

            <button className="w-24 h-12 border-2 rounded-lg hover:bg-blue-500 hover:text-white mt-10" onClick={alertFunc}>Next</button>
        </div>
    )
}