import { Carousel } from "flowbite-react";
import { SVgPic } from '../components/SvgPic';
import { FaPen } from "react-icons/fa";
import Image from 'next/image'


const Indicator_right=function(){
    return(
        <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-500/30 group-hover:bg-slate-900/30 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span>
    )
  }

  const Indicator_left=function(){
    return(
        <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-500/30 group-hover:bg-slate-900/30 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></span>
    )
  }


export default function Gallery(){

    let arr1=[1,2,3,4,5,6,7,8,9,10,11,12]

    return(
      
        <div  id="gallery" className={`relative top-[340px] bg-gray-800  flex flex-cols justify-center items-center pb-10`}>
            
            <div className="" style={{paddingTop:"100px"}}>
                <div className="flex flex-col justify-center items-center pb-10">
                    <div className="" style={{width:"40px",borderTop: "3px white solid"}}></div>
                    <div className="mt-3" style={{color: "white", fontFamily: "libre baskerville", fontWeight:"lighter", fontSize: "26px"}}>Gallery </div>
                </div>

              
               
                <div class="grid grid-cols-2 md:grid-cols-4">

                    { 
                    arr1.map(item=>{
                            return(
                                
    <                               div key={item} class="m-4">
                                        <Image src={`/gallery/IMG_${item}.JPG`} width="800" height="800" class="rounded-lg w-56 h-56" alt=""/>
                                    </div>
                            
                            )
                        })
                    }

                </div>
              
             



              
                
            </div>
        </div>
        
    )
}