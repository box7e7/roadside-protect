
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaArrowDown} from 'react-icons/fa'
import Image from 'next/image'
import icon from "../images/tow_icon_1.png"
import tow from "../images/blue_bg.png"

export default function HeaderDispatch(){


    return(

        // <div   className="" >
       
        //     <div className='flex flex-row h-20 sticky top-0 bg-white object-cover justify-center items-center'>
                
        //         <Image className='h-12' src={icon}  width={50} height={20}  alt="Picture of the author"/>
        //     </div>
        //     <div className="  bg-opacity-50 bg-black flex flex-col items-center pt-10 pb-20  bg-cover bg-fix bg-[url('../images/tow_image.jpeg')] bg-no-repeat  bg-center bg-fixed bg-blend-overlay">
        //     <h1 className="text-white text-3xl mb-4"> SELECT SERVICE TO</h1>
        //     <h3 className="text-white mb-4 text-xl">GET STARTED</h3>
        //     <div className='pt-10'>
        //     <FaArrowDown  className="text-white animate-bounce h-30" size={80}/>
        //     </div>
        //     </div>
        // </div>

        <>
        <div className='flex flex-row h-28 sticky top-0 bg-white object-cover justify-center items-center z-10 pt-4 pb-4'>
                
        <Image className='h-20 w-20  m-1 p-2 rounded-full bg-gray-200 hover:bg-gray-300' src={icon}  width={70} height={50}  alt="Picture of the author"/>
        </div>
        
        <div style={{height:400}} className=" relative mix-blend-multiply bg-black flex justify-center  ">
            <Image className='absolute top-0 h-full w-full  opacity-40 ' src={tow}    alt="Picture of the author"/>
            
            <div className='absolute text-center flex flex-col items-center pt-10 ml-1 '>
                <h1 className="text-white text-3xl mb-4"> SELECT SERVICE TO</h1>
                <h3 className="text-white mb-4 text-xl">GET STARTED</h3>
                <div className='pt-10'>
                <FaArrowDown  className="text-white animate-bounce h-30" size={80}/>
                </div>
            </div>


        </div> 

        
           
     
      
        </>
       
    )
}