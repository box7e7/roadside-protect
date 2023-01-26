import { useState,useContext,useEffect } from "react";
import Context from "../components/ContextFile";
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

import { PrismaClient } from '@prisma/client'
import bg from "../images/blue_bg1.png"
import logo from "../images/logo_momentum.png"
import IconComponent from '../components/IconComponent'
import towTruckIcon from "../images/tow-truck-icon_blue.png"
import flatTireIcon from "../images/flat-tire-icon_blue.png"
import carStuckInMud from "../images/car_stuck_in_mud_1_blue.png"
import fuelIcon from "../images/fuel-icon_blue.png"
import iconBatteries from "../images/icon_battery_0.png"
import unlockIcon from "../images/icon_lockout_0.png"



const geoLoc=(setLoc,setAgent,dispatch,router)=>{
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
  
      const success=(position)=>{
        setLoc({lat:position.coords.latitude,long:position.coords.longitude})
        dispatch({type:"LOCATION",location:{lat:position.coords.latitude,long:position.coords.longitude}})
        router.push("/dispatch")
      }
  
      const error=(error)=>{
      
        alert(`Error code: ${error.code}\nError Message: ${error.message}\nTo enable your location please access to: Settings > Privacy > Location Service > enable it for Browser application`);
      
      }
  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success,error,options);
        
    } else {
        // Make API call to the GeoIP services
    }
    
     setAgent(window.navigator.userAgentData)
}

  
  






export default function Location(){

  const [loc,setLoc]=useState({lat: null, long: null})
  const [agent,setAgent]=useState(null)
  const {mainState,dispatch}=useContext(Context)
  const router = useRouter()

 useEffect(()=>{

  let elm=document.getElementsByClassName("dispatch-icon")
  for (let i=0;i<elm.length;i++){
    console.log("$$$$$$$$$$$$$$$$$",elm[i].innerText)
    elm[i].classList.remove("bg-gray-400")
    elm[i].classList.add("bg-gray-300")
       
    if (elm[i].innerText==mainState.service){
          elm[i].classList.remove("bg-gray-300")
          elm[i].classList.add("bg-gray-400")
       }
  }

 },[mainState])
  
  console.log("/////// Main state ////////\n",mainState)
   return(

         <>
            <Head>
             <script  defer src="/scripts/initMap.js"></script>
             <script defer type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJdqzicSsMRPrMk_OVUoQDaMPeNBi-aU&libraries=places&callback=initMap"></script>
            </Head>
            <Script src="/scripts/initMap.js"></Script>
            <div id="navigation" className="w-full h-20 bg-slate-100 sticky top-0 flex justify-center items-center z-10">
              <Image className="h-20 w-48" src={logo}  alt=""/>
            </div>
            
            <div className="flex flex-col justify-center items-center bg-black">
                <Image className="w-full h-[400px] md:h-[600px] opacity-40" src={bg}  alt=""/> 
               
   
                <div className='absolute top-[120px] md:top-[200px] text-center flex flex-col items-center pt-10 ml-1 '>
                  <h1 className="text-slate-100 text-2xl mb-2">WHERE IS YOUR VEHICLE?</h1>
                  <h4 className="text-white  text-[12px]">We need your location to dispatch the closest</h4>
                  <h4 className="text-white mb-8 text-[12px]">service provider</h4>
                 
                  <button className="border-2 border-slate-200 bg-slate-200 w-48 rounded-sm text-sm p-1 hover:bg-slate-300 hover:border-slate-300" onClick={()=>{
                    geoLoc(setLoc,setAgent,dispatch,router)
                  }}>FIND ME</button>
                  
                  <div className="flex items-center  mt-4">
                    <div className="border-2 border-slate-100 w-20 h-0"></div>
                    <div className="text-slate-100 text-sm px-1">OR</div>
                    <div className="border-2 border-slate-100 w-20 h-0"></div>
                  </div>
                 
                  <button className="border-2 border-slate-100 bg-slate-200 w-48 rounded-sm text-sm mt-4 p-1 hover:bg-slate-300 hover:border-slate-300" onClick={()=>{
                    router.push("/getAddress")
                  }}>ENTER ADDRESS</button>
                </div>

                
                
            </div>

            <div className='bg-gray-100 pb-8 pt-1'>
              <div className="flex flex-row  justify-center m-10">
                
                <div className='relative mx-5 hover:cursor-pointer ' onClick={()=>{
                  router.push("/location")
                  dispatch({type:"SERVICE",service:"Tow"})
                  }}>
                  <IconComponent text="Tow" icon={<Image className='p-3' src={towTruckIcon}/>} />
                </div>
              
                <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                  router.push("/location")
                  dispatch({type:"SERVICE",service:"Tire"})
                  }}>
                  <IconComponent text="Tire" icon={<Image className='p-3' src={flatTireIcon}/>} />
                </div>
                
                <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                  router.push("/location")
                  dispatch({type:"SERVICE",service:"Stuck"})
                  }}>
                  <IconComponent text="Stuck" icon={<Image  className='w-[65px] h-[40px]' src={carStuckInMud}/>} />
                </div>

              </div>

              <div className="flex flex-row  justify-center m-10">
                
                <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                  router.push("/location")
                  dispatch({type:"SERVICE",service:"Fuel"})
                  }}>
                  <IconComponent text="Fuel" icon={<Image className='p-3' src={fuelIcon}/>} />
                </div>
              
                <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                    router.push("/location")
                    dispatch({type:"SERVICE",service:"Battery"})
                  }}>
                    <IconComponent text="Battery" icon={<Image className='p-3' src={iconBatteries}/>} />
                </div>
                
                <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                  router.push("/location")
                  dispatch({type:"SERVICE",service:"Unlock"})
                  }}>
                  <IconComponent text="Unlock" icon={<Image className='p-3' src={unlockIcon}/>} />
                </div>
              
              </div>
            
            </div>


            
         </>

    )

}