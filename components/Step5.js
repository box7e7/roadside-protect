import {useContext} from 'react'
import {Button,Card} from 'flowbite-react'
import Context from "../components/ContextFile";


export default function Step5(){
    const {mainState,dispatch}=useContext(Context)
    return(
        <>

        <div className="flex justify-center items-center flex-col">
            <div className='flex justify-center items-center flex-col pb-10'>
                {/* <Image className="h-36 w-48 mb-10" src={car}  alt=""/> */}
                <div className='text-2xl font-bold'>GET HELP NOW</div>
                <div className='text-[#11A9C9] text-4xl  font-bold font-serif '>$169</div>
            </div>


           



        </div>
        
        </>
    )
}