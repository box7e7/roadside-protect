
import { useContext,useState } from 'react';
import {Button} from 'flowbite-react'
import Progress from './Progress';
import Context from "./ContextFile"


const toggleButton=function(e,q){
    let btns=document.getElementsByTagName("button")
        
    for (let i=0;i<btns.length;i++){
        if(btns[i].attributes.name?.value==q){
            if(e.target.attributes.value.value=="yes"){
                console.log(`${q}: Yes`)
                if(btns[i].attributes.value.value=="yes"){
                    btns[i].classList.add("bg-blue-600","text-white")
                }
                else{
                    btns[i].classList.remove("bg-blue-600","text-white")
                }

            }
            if( e.target.attributes.value.value=="no"){
                console.log(`${q}: No`)
                if(btns[i].attributes.value.value=="no"){
                    btns[i].classList.add("bg-blue-600","text-white")
                }
                else{
                    btns[i].classList.remove("bg-blue-600","text-white")
                }
            }
        }
    }
}

export default  function Step1(){
    const {mainState,dispatch}=useContext(Context)
    console.log("///// from step1 //////",mainState.service)
    return (
        <div>
          
            <div className='flex justify-center items-center flex-col pb-5'>
                
                <div className='text-2xl font-bold'>{mainState.service} Questions</div>

                {/* Question 1 */}
                <div className='pt-10 pb-5'>Has your vehicle been involved in a accident?</div>
                <div className='flex items-center justify-center space-x-4'>
                    <button name="q1" value="yes" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3' onClick={(e)=>toggleButton(e,"q1")}>Yes</button>
                    <button name="q1" value="no" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3'  onClick={(e)=>toggleButton(e,"q1")}>No</button>
                </div>
                {/* Question 2 */}
                <div className='pt-5 pb-5'>Is your Vehicle leaking fuel?</div>
                <div className='flex items-center justify-center space-x-4'>
                    <button name="q2" value="yes" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3' onClick={(e)=>toggleButton(e,"q2")}>Yes</button>
                    <button name="q2" value="no" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3'  onClick={(e)=>toggleButton(e,"q2")}>No</button>
                </div>
                {/* Question 3 */}
                <div className='pt-5 pb-5'>Is the vehicle located in a parking garage?</div>
                <div className='flex items-center justify-center space-x-4'>
                    <button name="q3" value="yes" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3' onClick={(e)=>toggleButton(e,"q3")}>Yes</button>
                    <button name="q3" value="no" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3'  onClick={(e)=>toggleButton(e,"q3")}>No</button>
                </div>
                {/* Question 4 */}
                <div className='pt-5 pb-5'>Is the key with the vehicle?</div>
                <div className='flex items-center justify-center space-x-4'>
                    <button name="q4" value="yes" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3' onClick={(e)=>toggleButton(e,"q4")}>Yes</button>
                    <button name="q4" value="no" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3'  onClick={(e)=>toggleButton(e,"q4")}>No</button>
                </div>
                   {/* Question 5 */}
                   <div className='pt-5 pb-5'>Can the vehicle put in neutral?</div>
                <div className='flex items-center justify-center space-x-4'>
                    <button name="q5" value="yes" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3' onClick={(e)=>toggleButton(e,"q5")}>Yes</button>
                    <button name="q5" value="no" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3'  onClick={(e)=>toggleButton(e,"q5")}>No</button>
                </div>


                 {/* Here Next button */}
                <div className='w-full flex items-center justify-center py-10'>
                    <Button pill={true} className='w-[70%] font-bold' onClick={()=>{
                         dispatch({type:"STEPS",steps:2})
                    }}>
                        <div className='text-lg'>Next</div>
                    </Button>
                </div>
                {/* Above Next Button */}
            
            
            
            </div>
      
        </div>
    )
}

