import {useContext} from 'react'
import {Button,Card} from 'flowbite-react'
import Context from "../components/ContextFile";


export default function step5(){
    const {mainState,dispatch}=useContext(Context)
    return(
        <>

        <div className="flex justify-center items-center flex-col">
            <div className='flex justify-center items-center flex-col pb-10'>
                {/* <Image className="h-36 w-48 mb-10" src={car}  alt=""/> */}
                <div className='text-2xl font-bold'>Summary</div>
            </div>


           



        </div>
        
        </>
    )
}