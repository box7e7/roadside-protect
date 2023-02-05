

import { useEffect} from "react"
import AlertComponent from "../components/AlertComponent"
import BeatLoader from "react-spinners/BeatLoader";


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
        
        <div className="flex items-center justify-center  w-full h-full">
            
            <AlertComponent/>

            <div className="flex justify-center items-center mt-10 space-x-3">
                <button className="w-24 h-12 border-2 rounded-lg hover:bg-blue-500 hover:text-white" onClick={alertFunc}>Next</button>
                
            </div>

            {/* <div  className='w-full flex items-center justify-center space-x-3'>
                <div className='flex items-center space-x-3'>
                    
                    <p className="text-slate-700">Please wait redirecting</p>
                    <BeatLoader color="#9CA3AF" size={15}/>

                </div>
            </div> */}

            <div className=" absolute bottom-0 bg-black text-white w-full h-16  flex items-center justify-center">
            <h1>Footer</h1>
            </div>


        </div>
    )
}