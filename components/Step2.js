import { useContext,useState,useEffect } from 'react';
import Image from 'next/image'
import {Button} from 'flowbite-react'
import Context from "../components/ContextFile";
import SelectCar from './SelectCar'
import car from "../images/car_Blue.png"


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
    },10)

}  
const toggleButton=function(e,q,state,setState){
    let btns=document.getElementsByTagName("button")
        
    for (let i=0;i<btns.length;i++){
        if(btns[i].attributes.name?.value==q){
            if(e.target.attributes.value.value=="yes"){
                console.log(`${q}: Yes`)
                let str=`{"${q}":"Yes"}`
                let obj=JSON.parse(str)
                setState({...state,...obj})
                if(btns[i].attributes.value.value=="yes"){
                    btns[i].classList.add("bg-blue-600","text-white")
                }
                else{
                    btns[i].classList.remove("bg-blue-600","text-white")
                }

            }
            if( e.target.attributes.value.value=="no"){
                console.log(`${q}: No`)
                let str=`{"${q}":"No"}`
                let obj=JSON.parse(str)
                setState({...state,...obj})
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

const getSelectedValues=(setSelectedValues)=>{
    let btns=document.getElementsByTagName("button")
    let arr1=[]
    for(let i=0;i<btns.length;i++){

        if(btns[i].attributes.id?.value.includes("headlessui-listbox-button")){
        console.log("////// modal buttons //////",btns[i].getElementsByTagName('span')[1].innerHTML)
            arr1.push(btns[i].getElementsByTagName('span')[1].innerHTML)
            if(btns[i].getElementsByTagName('span')[1].innerHTML.includes("Select")){
                btns[i].classList.add("outline")
                btns[i].classList.add("outline-red-200")
            }
        }
}
setSelectedValues(arr1)
}

export default function Step2(){
    const {mainState,dispatch}=useContext(Context)
    const [state,setState]=useState({q7:null})
    return(
       <>
            <div>
                <div className='flex justify-center items-center flex-col pb-5'>
                    <Image className="h-36 w-48 mb-10" src={car}  alt=""/>
                    <div className='text-2xl font-bold'>Vehicle Information</div>
                </div>
                <SelectCar></SelectCar>
            </div>

             {/* Question 7 */}
             <div className='pt-5 pb-5 text-center'>Does the vehicle weigh more than 8500 lbs (3855 kilograms)? <br/><i>it is important to answer this question correctly, towing price may change based on vehicle weight.</i></div>
                <div className='flex items-center justify-center space-x-4'>
                    <button name="q7" value="yes" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3' onClick={(e)=>toggleButton(e,"q7",state,setState)}>Yes</button>
                    <button name="q7" value="no" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3'  onClick={(e)=>toggleButton(e,"q7",state,setState)}>No</button>
                </div>

            {/* Here Next button */}
            <div className='w-full flex items-center justify-center py-10'>
                <Button pill={true} className='w-[70%] font-bold' onClick={function(){
                    let btns=document.getElementsByTagName("button")
                    let arr1=[]
                    let arr_boolean=[]
                    for(let i=0;i<btns.length;i++){
                
                        if(btns[i].attributes.id?.value.includes("headlessui-listbox-button")){
                        //   console.log("////// modal buttons //////",btns[i].getElementsByTagName('span')[1].innerHTML)
                            arr_boolean.push(btns[i].getElementsByTagName('span')[1].innerHTML.includes("Select") ? false : true)
                            arr1.push(btns[i].getElementsByTagName('span')[1].innerHTML)
                            if(btns[i].getElementsByTagName('span')[1].innerHTML.includes("Select")){
                                btns[i].classList.add("outline")
                                btns[i].classList.add("outline-red-200")
                            }
                        }
                }
                
                if (arr_boolean.includes(false) || state.q7==null){
                    console.log("//// All fields are required ////")
                    alertFunc()
                }
                else{
                    dispatch({type:"VEHICLE",vehicle:{make:arr1[0],model:arr1[1],color:arr1[2],year:arr1[3],"Medium Duty":state.q7}})
                    mainState.service=="Tow Service" ? dispatch({type:"STEPS",steps:3}) : dispatch({type:"STEPS",steps:4})
                }
                
                }}>
                    <div className='text-lg'>Next</div>
                </Button>
            </div>
            {/* Above Next Button */}

       </>
    )
}