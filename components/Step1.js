
import { useContext,useState,useEffect } from 'react';
import {Button} from 'flowbite-react'
import MyListBox from './MyListBox';
import {db,doc,getDoc, collection, getDocs,addDoc,onSnapshot} from "../firebase/firebase"
import AlertComponent from "../components/AlertComponent"
import Context from "./ContextFile"




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

export default  function Step1(){
    const [state,setState]=useState({q1:null,q2:null,q3:null,q4:null,q5:null})
    const [selected, setSelected] = useState("Select your location type")
    const {mainState,dispatch}=useContext(Context)

    useEffect(()=>{
        let pr=document.getElementById("progress0")
        pr.addEventListener('animationend', () => {
        console.log('Animation ended');
        let btn=document.getElementById("alert0")
        btn.classList.add("hidden")
          });
    },[])

   


    console.log("///// from step1 //////",mainState.service)
    console.log("///// From step 1 //////",state)
    console.log("///// From step 1 selected //////",selected)
    return (
        <div>
            
            <div>
                <div className='flex justify-center items-center flex-col pb-5 w-[100%]'>
                
                <div className='text-2xl font-bold'>{mainState.service} Questions</div>

                {/* Question 1 */}
                <div className='pt-10 pb-5'>Has your vehicle been involved in a accident?</div>
                <div className='flex items-center justify-center space-x-4'>
                    <button name="q1" value="yes" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3' onClick={(e)=>toggleButton(e,"q1",state,setState)}>Yes</button>
                    <button name="q1" value="no" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3'  onClick={(e)=>toggleButton(e,"q1",state,setState)}>No</button>
                </div>
                {/* Question 2 */}
                <div className='pt-5 pb-5'>Is your Vehicle leaking fuel?</div>
                <div className='flex items-center justify-center space-x-4'>
                    <button name="q2" value="yes" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3' onClick={(e)=>toggleButton(e,"q2",state,setState)}>Yes</button>
                    <button name="q2" value="no" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3'  onClick={(e)=>toggleButton(e,"q2",state,setState)}>No</button>
                </div>
                {/* Question 3 */}
                <div className='pt-5 pb-5'>Is the vehicle located in a parking garage?</div>
                <div className='flex items-center justify-center space-x-4'>
                    <button name="q3" value="yes" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3' onClick={(e)=>toggleButton(e,"q3",state,setState)}>Yes</button>
                    <button name="q3" value="no" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3'  onClick={(e)=>toggleButton(e,"q3",state,setState)}>No</button>
                </div>
                {/* Question 4 */}
                <div className='pt-5 pb-5'>Is the key with the vehicle?</div>
                <div className='flex items-center justify-center space-x-4'>
                    <button name="q4" value="yes" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3' onClick={(e)=>toggleButton(e,"q4",state,setState)}>Yes</button>
                    <button name="q4" value="no" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3'  onClick={(e)=>toggleButton(e,"q4",state,setState)}>No</button>
                </div>
                {/* Question 5 */}
                <div className='pt-5 pb-5'>Can the vehicle put in neutral?</div>
                <div className='flex items-center justify-center space-x-4'>
                    <button name="q5" value="yes" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3' onClick={(e)=>toggleButton(e,"q5",state,setState)}>Yes</button>
                    <button name="q5" value="no" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3'  onClick={(e)=>toggleButton(e,"q5",state,setState)}>No</button>
                </div>

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
                        if(state.q1 && state.q2 && state.q3 && state.q4 && state.q5 && !selected.includes("Select")){
                          dispatch({type:"STEPS",steps:2})
                          
                        }
                        else{
                            console.log("//// All question must be answered ////")
                            alertFunc()
                            // getMyDocs()
                            
                        }
                        
                    }}>
                        <div className='text-lg'>Next</div>
                    </Button>
            </div>
                {/* Above Next Button */}
            
      
        </div>
    )
}

