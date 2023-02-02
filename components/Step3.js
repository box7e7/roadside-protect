
import { useEffect,useState,useContext } from 'react'
import {Button} from 'flowbite-react'
import Context from "../components/ContextFile";



export default function Step3(){

    const [dropoffAddress,setDropoffAddress]=useState(null)
    const [enteredText,setEnteredText]=useState(null)
    const {mainState,dispatch}=useContext(Context)

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

    // console.log("/// dropoff address from step3 ////",dropoffAddress)

    return(
        <>
            <div>
                <div className='flex justify-center items-center flex-col pb-5'>
                    {/* <Image className="h-36 w-48 mb-10" src={car}  alt=""/> */}
                    <div className='text-2xl font-bold'>Drop off Location</div>
                </div>

                <div className="flex flex-col justify-center items-center">
                
               
                <div className=' flex items-center justify-center pt-10 w-full pb-10'>
                   <input type="text" id="autocomplete_dropoff" className="border-2 border-slate-300 w-[100%] md:w-[90%] rounded-md p-2 outline-0 outline-none text-slate-900 bg-slate-100 bg-opacity-80 hover:bg-opacity-90 placeholder-slate-500 " placeholder='Enter address here' onChange={(e)=>{
                    // console.log(e.target.value)
                    setEnteredText(e.target.value)
                   }}/>
                </div>

                <Button  pill={true}  className='w-[70%] font-bold'  onClick={()=>{
                  {dropoffAddress ? dispatch({type:"DROPOFFADDRESS",dropoffAddress:dropoffAddress.address}) : null}
                  {dropoffAddress ? dispatch({type:"STEPS",steps:4}): null}
                  {dropoffAddress ? document.getElementById("autocomplete_dropoff").classList.remove("border-red-300"): document.getElementById("autocomplete_dropoff").classList.add( "border-red-300")}
                  
                }}>
                    <div className='text-lg'>Next</div>
                </Button>

              
                
            </div>
                
            </div>
        </>
    )
}