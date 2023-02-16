
import { useEffect,useRef } from "react"

export default function Progress({step,service,dispatch}){

    const progressRef = useRef(null);

useEffect(()=>{

   
//    if(step>1){
    // let li=document.getElementById("progress")?.getElementsByTagName('li')
    let li=progressRef.current.getElementsByTagName('li')
    // console.log("///// from progress //////",li,step)
    if(service=="Tow Service"){
        for(let i=0;i<step;i++){
            li[i]?.classList.remove("bg-slate-400")
            li[i]?.classList.add("bg-blue-500")
        }
    }
    else{

        if(step==4){
            for(let i=0;i<step-1;i++){
                li[i]?.classList.remove("bg-slate-400")
                li[i]?.classList.add("bg-blue-500")
            }
        }
        else{
            for(let i=0;i<step;i++){
                li[i]?.classList.remove("bg-slate-400")
                li[i]?.classList.add("bg-blue-500")
            }
        }


    // }
    
   }

},[step])



    return(
        <>
        <ul id="progress" ref={progressRef} className="flex space-x-1">
            
            {service=="Tow Service" ?
            <>
                <li className="rounded-full bg-blue-500   w-5 h-5 hover:cursor-pointer" onClick={()=>{
                   if(step>=1){
                    dispatch({type:"STEPS",steps:1})
                    let li=document.getElementById("progress").getElementsByTagName('li')
                    for(let i=1;i<step;i++){
                        li[i]?.classList.remove("bg-blue-500")
                        li[i]?.classList.add("bg-slate-400")
                    }
                   }
                }}></li>
                <li className="rounded-full bg-slate-400  w-5 h-5 hover:cursor-pointer" onClick={()=>{
                    if(step>=2){
                        dispatch({type:"STEPS",steps:2})
                        let li=document.getElementById("progress").getElementsByTagName('li')
                        for(let i=2;i<step;i++){
                            li[i]?.classList.remove("bg-blue-500")
                            li[i]?.classList.add("bg-slate-400")
                        }
                    }
                }}></li>
                <li className="rounded-full bg-slate-400  w-5 h-5 hover:cursor-pointer" onClick={()=>{
                    if(step>=3){
                        dispatch({type:"STEPS",steps:3})
                        let li=document.getElementById("progress").getElementsByTagName('li')
                        for(let i=3;i<step;i++){
                            li[i]?.classList.remove("bg-blue-500")
                            li[i]?.classList.add("bg-slate-400")
                        }
                    }
                }}></li>
                <li className="rounded-full bg-slate-400  w-5 h-5 hover:cursor-pointer" onClick={()=>{
                    if(step>=4){
                        dispatch({type:"STEPS",steps:4})
                        let li=document.getElementById("progress").getElementsByTagName('li')
                        for(let i=4;i<step;i++){
                            li[i]?.classList.remove("bg-blue-500")
                            li[i]?.classList.add("bg-slate-400")
                        }
                    }
                }}></li>
                <li className="rounded-full bg-slate-400  w-5 h-5 hover:cursor-pointer" onClick={()=>{
                   if(step>=5){
                    dispatch({type:"STEPS",steps:5})
                   }
                }}></li>
            </>
            
            :
            
            <>
                <li className="rounded-full bg-blue-500  w-5 h-5 hover:cursor-pointer" onClick={()=>{
                    if(step>=1){
                        dispatch({type:"STEPS",steps:1})
                        let li=document.getElementById("progress").getElementsByTagName('li')
                        for(let i=1;i<step;i++){
                            li[i]?.classList.remove("bg-blue-500")
                            li[i]?.classList.add("bg-slate-400")
                    }
                    }
                }}></li>
                <li className="rounded-full bg-slate-400  w-5 h-5 hover:cursor-pointer" onClick={()=>{
                    if(step>=2){
                        dispatch({type:"STEPS",steps:2})
                        let li=document.getElementById("progress").getElementsByTagName('li')
                        for(let i=2;i<step;i++){
                            li[i]?.classList.remove("bg-blue-500")
                            li[i]?.classList.add("bg-slate-400")
                    }
                    }
                }}></li>
                <li className="rounded-full bg-slate-400  w-5 h-5 hover:cursor-pointer" onClick={()=>{
                    if(step>=4){
                        dispatch({type:"STEPS",steps:4})
                        let li=document.getElementById("progress").getElementsByTagName('li')
                        for(let i=3;i<step;i++){
                            li[i]?.classList.remove("bg-blue-500")
                            li[i]?.classList.add("bg-slate-400")
                    }
                    }
                }}></li>
                <li className="rounded-full bg-slate-400  w-5 h-5 hover:cursor-pointer" onClick={()=>{
                    if(step>=5){
                        dispatch({type:"STEPS",steps:5})
                        let li=document.getElementById("progress").getElementsByTagName('li')
                        for(let i=4;i<step;i++){
                            li[i]?.classList.remove("bg-blue-500")
                            li[i]?.classList.add("bg-slate-400")
                    }
                    }
                }}></li>
                
            </>}
        </ul>
        </>
    )
}