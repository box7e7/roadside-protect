
import { useState,useContext,useEffect } from "react";
import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
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
import GridLoader from "react-spinners/GridLoader";


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


  


// const geoLoc=(setLoc,setAgent)=>{
//   var options = {
//       enableHighAccuracy: true,
//       timeout: 5000,
//       maximumAge: 0
//     };

//     const success=(position)=>{
//       setLoc({lat:position.coords.latitude,long:position.coords.longitude})
//       dispatch({type:"LOCATION",location:loc})
//     }

//     const error=(error)=>{
    
//       alert(`Error code: ${error.code}\nError Message: ${error.message}\nTo enable your location please access to: Settings > Privacy > Location Service > enable it for Browser application`);
    
//     }

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(success,error,options);
      
//   } else {
//       // Make API call to the GeoIP services
//   }
  
//   setAgent(window.navigator.userAgentData)
//   }





export default function Design(){
  
  const router = useRouter()
  const [loc,setLoc]=useState({lat: 29.712020, long: -95.510040})
  const [agent,setAgent]=useState(null)
  const [visible,setVisible]=useState(false)
  const [textArea,setTextArea]=useState({street:null})
  const {mainState,dispatch}=useContext(Context)

  // console.log("/////// loc ////////\n",loc)
  // console.log("/////// mainState ////////\n",mainState)

  useEffect(()=>{
    mainState.location ? getAddress(mainState.location,setTextArea) : getAddress(loc,setTextArea)
    !mainState.service ? router.push("/dispatch") : null
  },[])


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

       <>
       {!mainState.service ?
             <div>
             <Head>
               <script  defer src="/scripts/initMap.js"></script>
               <script defer type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJdqzicSsMRPrMk_OVUoQDaMPeNBi-aU&libraries=places&callback=initMap"></script>
             </Head>
             <Script src="/scripts/initMap.js"></Script>
           </div> : null}
        {mainState.service ?  
        <div className="h-[100%]">
        <div id="navigation" className="w-full h-20 bg-slate-200 sticky top-0 flex justify-center items-center z-20 shadow-xl">
          <Image className="h-20 w-48" src={logo}  alt="logo"/>
        </div>
        
        <div   className="flex   items-center flex-col">
        
            {/* {loc.lat ? <div className="w-full pb-10 h-3/4"> <Map loc={loc} /> </div> :null} */}
            <input id="autocomplete" value={textArea.street ? (!textArea.street.includes("Error") ? textArea.street : "") : "" }  className="absolute top-24 bg-slate-600 z-10 w-[90%] p-2 rounded-md text-white outline-1 outline-slate-400 bg-opacity-60 placeholder-gray-100 hover:cursor-pointer hover:bg-opacity-75" type="text" placeholder="Enter address here"/>
            <div className="w-[100%] h-[450px]  overflow-hidden">
                <div className="w-full  h-full"> 
                    <Map loc={mainState.location ? mainState.location : loc} textArea={textArea} setVisible={setVisible} /> 
                </div> 
            </div>
        
            

        </div>

       {/* Service */}
       <div className='bg-white h-[450px] flex items-center justify-center pb-10'>
             
             <div className='flex flex-col space-y-3'>
                <div className="flex flex-row  justify-center pb-10">
                    
                    <div className='relative mx-5 hover:cursor-pointer ' onClick={()=>{
                      router.push("/location")
                      dispatch({type:"SERVICE",service:"Tow Service"})
                      }}>
                      <IconComponent text="Tow Service" icon={<Image className='p-3' src={towTruckIcon} alt="Tow truck"/>} />
                    </div>
                  
                    <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                      router.push("/location")
                      dispatch({type:"SERVICE",service:"Tire Change"})
                      }}>
                      <IconComponent text="Tire Change" icon={<Image className='p-3' src={flatTireIcon} alt="Change tire"/>} />
                    </div>
                    
                    <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                      router.push("/location")
                      dispatch({type:"SERVICE",service:"Winch Out"})
                      }}>
                      <IconComponent text="Winch Out" icon={<Image  className='w-[65px] h-[40px]' src={carStuckInMud} alt="Winch out"/> } />
                    </div>
                </div>

                <div className="flex flex-row  justify-center">
                  
                  <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                    router.push("/location")
                    dispatch({type:"SERVICE",service:"Fuel Delivery"})
                    }}>
                    <IconComponent text="Fuel Delivery" icon={<Image className='p-3' src={fuelIcon} alt="Fuel delivery"/>} />
                  </div>
                
                  <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                      router.push("/location")
                      dispatch({type:"SERVICE",service:"Jump Start"})
                    }}>
                      <IconComponent text="Jump Start" icon={<Image className='p-3' src={iconBatteries} alt="Jump start"/>} />
                  </div>
                  
                  <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                    router.push("/location")
                    dispatch({type:"SERVICE",service:"Lock Out"})
                    }}>
                    <IconComponent text="Lock Out" icon={<Image className='p-3' src={unlockIcon} alt="Unlock your Car"/>} />
                  </div>
                
                </div>
             </div>
            
            </div>

        {/* footer */}
        <div className="relative bottom-0 bg-slate-200 text-slate-600 w-full h-20  flex items-center justify-center">
        <h1>All rights reserved 2023</h1>
        </div>

        <PopUpQ visible={visible} setVisible={setVisible} className="h-[100%]" />

        
        </div>
      : <div className="absolute flex items-center justify-center w-full h-full">
          <GridLoader color="#36d7b7" size={15} />
        </div>}
       </>
    )

}