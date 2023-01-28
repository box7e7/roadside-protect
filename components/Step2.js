import { useContext,useState } from 'react';
import Image from 'next/image'
import {Button} from 'flowbite-react'
import Context from "../components/ContextFile";
import SelectCar from './SelectCar'
import car from "../images/car_Blue.png"

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
    return(
       <>
            <div>
                <div className='flex justify-center items-center flex-col pb-5'>
                    <Image className="h-36 w-48 mb-10" src={car}  alt=""/>
                    <div className='text-2xl font-bold'>Vehicle Information</div>
                </div>
                <SelectCar></SelectCar>
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
                
                if (arr_boolean.includes(false)){
                    console.log("//// All fields are required ////")
                }
                else{
                    dispatch({type:"VEHICLE",vehicle:{make:arr1[0],model:arr1[1],color:arr1[2],year:arr1[3]}})
                    dispatch({type:"STEPS",steps:3})
                }
                
                }}>
                    <div className='text-lg'>Next</div>
                </Button>
            </div>
            {/* Above Next Button */}

       </>
    )
}