import {useContext,useEffect, useState} from 'react'
import {Button} from 'flowbite-react'
import Context from "../components/ContextFile";
import BeatLoader from "react-spinners/BeatLoader";


export default function Step6(){
    const {mainState,dispatch}=useContext(Context)
    
    useEffect(() => {
       mainState.stripeURL ? window.open(mainState.stripeURL, '_blank', 'noreferrer') : null
    },[mainState.stripeURL])
    return(
        <div>
            <div  className='w-full flex items-center justify-center space-x-3'>{mainState.invoiceId ? (
                mainState.invoiceStatus ?
                <div className='w-full flex flex-col items-center justify-center'>
                    <div>{mainState.invoiceStatus}</div>
                    <div className='mt-5'>
                        <Button onClick={()=>{window.open(mainState.stripeURL, '_blank', 'noreferrer')}}>
                            <div className='text-md'>Redirect</div>
                        </Button>
                    </div>
                </div> 
                 : 
                <div className='w-full flex flex-col items-center justify-center'> 
                    <div className='mt-5'>
                        <Button onClick={()=>{window.open(mainState.stripeURL, '_blank', 'noreferrer')}}>
                            <div className='text-md'>Redirect</div>
                        </Button>
                    </div>
                </div>) : 
                
               

                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center space-x-3'>
                        <p className="text-slate-700">Please wait redirecting</p>
                        <BeatLoader color="#9CA3AF" size={15}/>
                    </div>
                    
                    {mainState.invoiceId ? 
                    <div className='mt-5'>
                        <Button onClick={()=>{window.open(mainState.stripeURL, '_blank', 'noreferrer')}}>
                            <div className='text-md'>Redirect</div>
                        </Button>
                    </div>
                    : null}
                </div>


                
                }


            </div>
        </div>
    )
}