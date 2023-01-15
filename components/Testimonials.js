import { Carousel } from "flowbite-react";
import { SVgPic } from '../components/SvgPic';
import { FaPen} from "react-icons/fa";
import Review from "../components/Reviews";
import { chunk } from "lodash";
 
 
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

export default function TestimonialsPages({data}){

    return(
         <div id="testimonials" className="pt-20">
 
            
             <div className="flex flex-col justify-center items-center  ">
                    <div className="" style={{width:"40px",borderTop: "3px black solid"}}></div>
                    <div className="mt-3" style={{color: "black", fontFamily: "libre baskerville", fontWeight:"lighter", fontSize: "26px"}}>Testimonials </div>
             </div>
            {/* Shown for small screens */}
            <div className="md:mt-[-80px]">
                <div  className="h-[400px] w-[100%] flex  justify-center items-center md:hidden">
                    
                    <Carousel slide={false} indicators={false} leftControl={<Indicator_left/>} rightControl={<Indicator_right/>} className="w-[100%] md:hidden">
                        
                    
    
                        {data.map((item)=>{
        
                                    return (
                                        <div key={item.id} className="flex  justify-center shadow-md rounded-lg hover:shadow-2xl p-5 md:hidden">
                                            <div  className="w-72">
    
                                                <div style={{width: "25px", height: "25px", color: "#ffb600", display:"inline-block", marginRight: "-7px"}}>
                                                <SVgPic/>
                                                </div> 
    
                                                <div style={{width: "25px", height: "25px", color: "#ffb600", display:"inline-block", marginRight: "-7px"}}>
                                                <SVgPic/>
                                                </div> 
    
                                                <div style={{width: "25px", height: "25px", color: "#ffb600", display:"inline-block", marginRight: "-7px"}}>
                                                <SVgPic/>
                                                </div> 
    
                                                <div style={{width: "25px", height: "25px", color: "#ffb600", display:"inline-block", marginRight: "-7px"}}>
                                                <SVgPic/>
                                                </div> 
    
                                                <div style={{width: "25px", height: "25px", color: "#ffb600", display:"inline-block"}}>
                                                <SVgPic/>
                                                </div> 
    
                                                <p  className="text-muted ml-2 pb-3"   style={{display: "inline-block", fontFamily: "open sans",fontWeight: "light",fontSize: "25px"}}></p>
                                                <p className="text-left" style={{fontFamily:"open sans",fontSize: "20px", color: "#202124"}}>{item.post}</p>
                                                <p className="pt-3" style={{color:" #48487f",fontFamily: "libre baskerville",fontSize: "22px"}}>{`${item.name}`}</p>
                                            </div>
    
                                        </div>
    
                                    )
    
                                    })}
                    
                    </Carousel>
                </div>
                
                {/* Shown for medium and above screens */}
                <div className="h-[720px] w-[100%] md:flex  justify-center items-center hidden pt-20 ">
                    
                    <Carousel slide={false} indicators={false} leftControl={<Indicator_left/>} rightControl={<Indicator_right></Indicator_right>} className="w-[95%]  hidden md:block">
                        
                    
    
                        {chunk(data,6).map((arr,index)=>{
    
                            console.log("////// key //////",index)
                            return <div key={index} className="md:grid  md:grid-cols-3 gap-y-6 gap-x-6 w-[80%] hidden   ">
    
                                {arr.map((item)=>{
                                
                                    return (
                                        
                                            <div key={item.id} className="flex  justify-center shadow-md rounded-lg hover:shadow-2xl p-5">
                                                <div  className="w-80">
    
                                                    <div style={{width: "25px", height: "25px", color: "#ffb600", display:"inline-block", marginRight: "-7px"}}>
                                                    <SVgPic/>
                                                    </div> 
    
                                                    <div style={{width: "25px", height: "25px", color: "#ffb600", display:"inline-block", marginRight: "-7px"}}>
                                                    <SVgPic/>
                                                    </div> 
    
                                                    <div style={{width: "25px", height: "25px", color: "#ffb600", display:"inline-block", marginRight: "-7px"}}>
                                                    <SVgPic/>
                                                    </div> 
    
                                                    <div style={{width: "25px", height: "25px", color: "#ffb600", display:"inline-block", marginRight: "-7px"}}>
                                                    <SVgPic/>
                                                    </div> 
    
                                                    <div style={{width: "25px", height: "25px", color: "#ffb600", display:"inline-block"}}>
                                                    <SVgPic/>
                                                    </div> 
    
                                                    <p  className="text-muted ml-2 pb-3"   style={{display: "inline-block", fontFamily: "open sans",fontWeight: "light",fontSize: "25px"}}></p>
                                                    <p className="text-left" style={{fontFamily:"open sans",fontSize: "16px", color: "#202124"}}>{item.post}</p>
                                                    <p className="pt-3" style={{color:" #48487f",fontFamily: "libre baskerville",fontSize: "20px"}}>{`${item.name}`}</p>
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
 
             {/* Button to leave a review */}
             <div className="w-full flex justify-center items-center mb-[-40px] pt-4 ">
                     <div className=" hover:shadow-lg hover:cursor-pointer border-2 border-slate-300 p-2 rounded-xl flex justify-center items-center space-x-2" onClick={()=>{
                          let modal = document.getElementById("myModal");
                          modal.style.display = "block";
                     }}>
                         <FaPen className="" style={{color:"#6366F1"}}/>
                         <h1 className="text-slate-600">Write a review</h1>
                     </div>
             </div>
 
             
                  <Review/>
 
         </div>
     )
 
 }