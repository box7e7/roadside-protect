
import { useEffect } from "react"

export default function Progress({step}){

useEffect(()=>{

   if(step>1){
    let li=document.getElementById("progress").getElementsByTagName('li')
    
    // console.log("///// from progress //////",li,step)
    for(let i=0;i<step;i++){
        li[i]?.classList.remove("bg-slate-400")
        li[i]?.classList.add("bg-blue-500")
    }
   }

},[step])



    return(
        <>
        <ul id="progress" className="flex space-x-1">
            
            <li className="rounded-full bg-blue-500  w-3 h-3"></li>
            <li className="rounded-full bg-slate-400  w-3 h-3"></li>
            <li className="rounded-full bg-slate-400  w-3 h-3"></li>
            <li className="rounded-full bg-slate-400  w-3 h-3"></li>
            <li className="rounded-full bg-slate-400  w-3 h-3"></li>
        </ul>
        </>
    )
}