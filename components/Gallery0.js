import { Carousel } from "flowbite-react";
import { SVgPic } from '../components/SvgPic';
import { FaPen} from "react-icons/fa";
import Review from "../components/Reviews";
import { chunk } from "lodash";
import Image from 'next/image'
import { useEffect, useState } from "react";
 
 
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

  let asyncFetch=async function(){
    let url=`${window.location.origin}`
    let li0=await fetch(`${url}/api/listPics`)
        .then(res=>res.json())
    return li0
   }

export default function TestimonialsPages(){
    // let arr1=[1,2,3,4,5,6,7,8,9,10,11,12]
    const [list,setList]=useState([])
    const [host,setHost]=useState("http://localhost")
    
    console.log("/////// list host  /////////\n",list,host)
    
    useEffect(()=>{
        asyncFetch().then(res=>setList(res))
        
        const protocol = window.location.protocol;
        const host = window.location.host;
        const fullHost = protocol + '//' + host;
        console.log("///// fullhost //////",fullHost)
        setHost(fullHost)
    },[])

    return(
        <div id="gallery" className="relative bg-gray-800 top-[340px]">


        <div className="flex flex-col justify-center items-center" style={{paddingTop:"100px"}}>
        <div className="" style={{width:"40px",borderTop: "3px white solid"}}></div>
        <div className="mt-3" style={{color: "white", fontFamily: "libre baskerville", fontWeight:"lighter", fontSize: "26px"}}>Gallery </div>
        </div>
        {/* Shown for small screens */}
        <div className="md:mt-[-100px]">
        <div  className="h-[600px] w-[100%] flex  justify-center items-center md:hidden pb-20 ">
            
            <Carousel slide={false} indicators={false} leftControl={<Indicator_left/>} rightControl={<Indicator_right/>} className="w-[100%] md:hidden">
                
            

                {list.map((item)=>{

                            return (
                                <div key={item} className="flex  justify-center shadow-md rounded-lg hover:shadow-2xl p-5 md:hidden">
                                    
                                    <div key={item} class="m-4">
                                        {/* <Image src={`/gallery/IMG_${item}.JPG`} width="800" height="800" class="rounded-lg w-96 h-96" alt=""/> */}
                                        <Image src={`${host}/api/serveFile?fileName=${item}`} width="800" height="800" class="rounded-lg w-96 h-96" alt=""/>
                                    </div>
                                        
                                </div>

                            

                            )

                            })}
            
            </Carousel>
        </div>

        {/* Shown for medium and above screens */}
        <div className="h-[1180px] w-[100%] md:flex  justify-center items-center hidden pt-10 pb-20">
            
            <Carousel slide={false} indicators={false} leftControl={<Indicator_left/>} rightControl={<Indicator_right></Indicator_right>} className="w-[95%]  hidden md:block">
                
            

                
            {chunk(list,6).map((arr,index)=>{

            console.log("////// key //////",index)
            return <div key={index} className="md:grid  md:grid-cols-3 gap-y-6 gap-x-6 w-[80%] hidden   ">

                    {arr.map((item)=>{

                    return (

                        <div key={item} className="flex  justify-center shadow-md rounded-lg hover:shadow-2xl p-5">
                            <div  className="w-80">
                                {/* <Image src={`/gallery/IMG_${item}.JPG`} width="800" height="800" class="rounded-lg w-80 h-80" alt=""/> */}
                                <Image src={`${host}/api/serveFile?fileName=${item}`} width="800" height="800" class="rounded-lg w-96 h-72" alt=""/>
                            </div>
                        </div>
                    
                    )

                    })
                    }

                </div>  




        })


        }

                
            
            </Carousel>
        </div>
        </div>






        </div>
     )
 
 }