import { useContext,useState,useEffect } from 'react';
import {Button} from 'flowbite-react'
import MyListBox from './MyListBox';
import Context from "./ContextFile"




export default  function FuelQuestions(){

    const [selected, setSelected] = useState("Select your location type")
    const {mainState,dispatch}=useContext(Context)

    console.log("///// from step1 //////",mainState.service)
    console.log("///// From step 1 selected //////",selected)
    
    return (
        <div>
            
            <div>
                <div className='flex justify-center items-center flex-col pb-5 w-[100%]'>
                  <div className='text-2xl font-bold'>{mainState.service} Questions</div>
                </div>

                <div className='pt-3'>
                    <MyListBox selected={selected} setSelected={setSelected}/>
                </div>

            
                <div className='pt-3'>
                    <label  for="message" className="m-2">Add special notes or instructions</label>
                    <div className=" flex flex-col justify-center  items-center w-full">
                        
                        <textarea  id="textArea" onChange={()=>{}} className="w-[100%] h-[100px] m-2 border border-slate-300 focus:outline-slate-300 focus:outline-2 bg-slate-100 rounded-md text-gray-700" placeholder=""></textarea>
                    </div>
                </div>
            </div>

             {/* Here Next button */}
             <div className='w-full flex items-center justify-center py-10'>
                    <Button pill={true} className='w-[70%] font-bold' onClick={()=>{
                        // if(state.q1 && state.q2 && state.q3 && state.q4 && state.q5 && !selected.includes("Select")){
                        //   dispatch({type:"STEPS",steps:2})
                          
                        // }
                        // else{
                        //     console.log("//// All question must be answered ////")
                        //     alertFunc()
                        //     // getMyDocs()
                            
                        // }
                        
                    }}>
                        <div className='text-lg'>Next</div>
                    </Button>
            </div>
                {/* Above Next Button */}
            
      
        </div>
    )
}

