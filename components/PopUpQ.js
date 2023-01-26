

import { useContext,useState } from 'react';
import {Modal,Button,HiOutlineExclamationCircle} from 'flowbite-react'
import Context from "../components/ContextFile";
import SelectCar from './SelectCar'
import carlist from "../json/carlist.json"

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

export default function PopUpQ({visible,setVisible,onClick}){




const {mainState,dispatch}=useContext(Context)





// console.log(Object.keys(carlist))
   

const onClose=()=>{
        setVisible(false)
    }

    return(
   
     <Modal className='h-full pt-5'
        show={visible}
        size="2xl"
        popup={true}
        position="top-center"
        onClose={onClose}
    >
      
        <Modal.Header/>
        <Modal.Body>


        
        

      
        <div className='flex justify-center pb-5'>
            <div className='text-2xl font-bold'>Vehicle Information</div>
        </div>
        <SelectCar></SelectCar>
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
              }
              
            }}>
                <div className='text-lg'>Next</div>
            </Button>
        </div>
       
        </Modal.Body>
      
    </Modal>


  
    )
}