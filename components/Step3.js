
import { useEffect,useState,useContext } from 'react'
import {Button} from 'flowbite-react'
import Context from "../components/ContextFile";

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

export default function Step3(){

    const [dropoffAddress,setDropoffAddress]=useState(null)
    const [enteredText,setEnteredText]=useState(null)
    const {mainState,dispatch}=useContext(Context)
    const [state,setState]=useState({q1:null,q2:null})

    useEffect(()=>{
        enteredText ? document.getElementById("autocomplete_dropoff").classList.remove("border-red-300") : null
    },[enteredText])
    useEffect(()=>{

       
        const handlePlaceSelect=function(){
            let addressObject = autocomplete.getPlace()
            // console.log(addressObject.formatted_address)
            setDropoffAddress({address:addressObject.formatted_address})
            document.getElementById("autocomplete_dropoff").classList.remove("border-red-300")
          }

      var input = document.getElementById('autocomplete_dropoff');
      var autocomplete = new window.google.maps.places.Autocomplete(input);
      autocomplete.addListener("place_changed", handlePlaceSelect)
      

    },[])


    useEffect(()=>{
        let pr=document.getElementById("progress0")
        pr.addEventListener('animationend', () => {
        console.log('Animation ended');
        let btn=document.getElementById("alert0")
        btn.classList.add("hidden")
          });
    },[])
    

    // console.log("/// dropoff address from step3 ////",dropoffAddress)

    return(
        <>
            <div>
                <div className='flex justify-center items-center flex-col pb-5'>
                    {/* <Image className="h-36 w-48 mb-10" src={car}  alt=""/> */}
                    <div className='text-2xl font-bold'>Drop off Location</div>
                </div>

                <div className="flex flex-col justify-center items-center">
                
               
                    <div className=' flex items-center justify-center pt-10 w-full pb-0'>
                    <input type="text" id="autocomplete_dropoff" className="border-2 border-slate-300 w-[100%] md:w-[90%] rounded-md p-2 outline-0 outline-none text-slate-900 bg-slate-100 bg-opacity-80 hover:bg-opacity-90 placeholder-slate-500 " placeholder='Enter address here' onChange={(e)=>{
                        // console.log(e.target.value)
                        setEnteredText(e.target.value)
                    }}/>
                    </div>

                    {/* Question 1 */}
                    <div className='pt-10 pb-5'>Is the Drop off location going to be open?</div>
                    <div className='flex items-center justify-center space-x-4'>
                        <button name="q1" value="yes" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3' onClick={(e)=>toggleButton(e,"q1",state,setState)}>Yes</button>
                        <button name="q1" value="no" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3'  onClick={(e)=>toggleButton(e,"q1",state,setState)}>No</button>
                    </div>
                
                    {/* Question 2 */}
                    <div className='pt-5 pb-5'>At the Drop off location, do they have night drop off box for keys?</div>
                    <div className='flex items-center justify-center space-x-4 pb-10'>
                        <button name="q2" value="yes" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3' onClick={(e)=>toggleButton(e,"q2",state,setState)}>Yes</button>
                        <button name="q2" value="no" className='pt-3 rounded border border-slate-300 w-24 h-10 flex justify-center items-center py-3'  onClick={(e)=>toggleButton(e,"q2",state,setState)}>No</button>
                    </div>

                    <Button  pill={true}  className='w-[70%] font-bold'  onClick={()=>{
                   
                    {dropoffAddress ? document.getElementById("autocomplete_dropoff").classList.remove("border-red-300"): document.getElementById("autocomplete_dropoff").classList.add( "border-red-300")}
                    
                    if(state.q1 && state.q2){
                        {dropoffAddress ? dispatch({type:"DROPOFFADDRESS",dropoffAddress:dropoffAddress.address}) : null}
                        {dropoffAddress ? dispatch({type:"STEPS",steps:4}): null}
                          }
                    else{
                        console.log("//// All question must be answered ////")
                        alertFunc()
                        
                        }
                    }}>
                        <div className='text-lg'>Next</div>
                    </Button>

              
                
            </div>
                
            </div>
        </>
    )
}