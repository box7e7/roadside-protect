
import { useState,useContext,useEffect } from "react";
import { useRouter } from 'next/router'
import Context from "../components/ContextFile";
import Map from "../components/Map";
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'
import bg from "../images/blue_bg1.png"
import logo from "../images/logo_momentum.png"
import clock from "../images/fast.png"

import IconComponent from '../components/IconComponent'
import towTruckIcon from "../images/tow-truck-icon_blue.png"
import flatTireIcon from "../images/flat-tire-icon_blue.png"
import carStuckInMud from "../images/car_stuck_in_mud_1_blue.png"
import fuelIcon from "../images/fuel-icon_blue.png"
import iconBatteries from "../images/icon_battery_0.png"
import unlockIcon from "../images/icon_lockout_0.png"
import axios from 'axios'; 
import PopUpQ from "../components/PopUpQ";


function getAddress(region,setTextArea) {
  // const url=` https://www.mapquestapi.com/geocoding/v1/reverse?key=GI7nP9lnNR2dRFHHJoEficXiex2eQrL2&location=${region.latitude},${region.longitude}`
  const url= `https://api.geocod.io/v1.6/reverse?q=${region.lat},${region.long}&api_key=e03620909f0fc686cf509f501656ef1e81f168c`
  
  axios.get(url)
  .then((response)=>{
      console.log('From Axios: ',response.data.results[0].formatted_address)
      setTextArea({street:response.data.results[0].formatted_address})
  })
  .catch((e)=>{
      console.log('Axios Get Error: ', e)
      setTextArea({street:'Error Occured from Axios Get'})
      

  })
}


  


const geoLoc=(setLoc,setAgent)=>{
  var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success=(position)=>{
      setLoc({lat:position.coords.latitude,long:position.coords.longitude})
      dispatch({type:"LOCATION",location:loc})
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





export default function Design(){
  
  const router = useRouter()
  const [loc,setLoc]=useState({lat: 29.712020, long: -95.510040})
  const [agent,setAgent]=useState(null)
  const [visible,setVisible]=useState(false)
  const [textArea,setTextArea]=useState({street:null})
  const {mainState,dispatch}=useContext(Context)

  // console.log("/////// loc ////////\n",loc)
  console.log("/////// mainState ////////\n",mainState)

  useEffect(()=>{
    mainState.location ? getAddress(mainState.location,setTextArea) : getAddress(loc,setTextArea)
  },[mainState])


  useEffect(()=>{

    let elm=document.getElementsByClassName("dispatch-icon")
    for (let i=0;i<elm.length;i++){
      // console.log("$$$$$$$$$$$$$$$$$",elm[i].innerText)
      elm[i].classList.remove("bg-gray-400")
      elm[i].classList.add("bg-gray-300")
         
      if (elm[i].innerText==mainState.service){
            elm[i].classList.remove("bg-gray-300")
            elm[i].classList.add("bg-gray-400")
         }
    }
  
   },[mainState])


 


    

  // console.log("////// Text area //////\n",textArea)
   return(

         <div className="h-[100%]">
            <div id="navigation" className="w-full h-20 bg-slate-100 sticky top-0 flex justify-center items-center z-20 shadow-xl">
              <Image className="h-20 w-48" src={logo}  alt=""/>
            </div>
            
            <div   className="flex   items-center flex-col">
            
                {/* {loc.lat ? <div className="w-full pb-10 h-3/4"> <Map loc={loc} /> </div> :null} */}
                <input id="autocomplete" value={textArea.street ? (!textArea.street.includes("Error") ? textArea.street : null) : null }  className="absolute top-24 bg-slate-600 z-10 w-[90%] p-2 rounded-md text-white outline-1 outline-slate-400 bg-opacity-60 placeholder-gray-100 hover:cursor-pointer hover:bg-opacity-75" type="text" placeholder="Enter address here"/>
                <div className="w-[100%] h-[450px]  overflow-hidden">
                    <div className="w-full  h-full"> 
                        <Map loc={mainState.location ? mainState.location : loc} textArea={textArea} setVisible={setVisible} /> 
                    </div> 
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

            <PopUpQ visible={visible} setVisible={setVisible} className="h-[100%]" />

            
         </div>

    )

}