
import { useEffect,useState, useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Context from "../components/ContextFile";
import Head from 'next/head'
import Script from 'next/script'
import { PrismaClient } from '@prisma/client'
import PopUpQ from '../components/PopUpQ';
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
import GridLoader from "react-spinners/GridLoader";




 




export default function GetAddress(){

  const router = useRouter()
  const [address,setAddress]=useState({address:null})
  const [visible,setVisible]=useState(false)
  const {mainState,dispatch}=useContext(Context)


    useEffect(()=>{

      !mainState.service ? router.push("/dispatch") : null
        const handlePlaceSelect=function(){
            let addressObject = autocomplete.getPlace()
            // console.log(addressObject.formatted_address)
            setAddress({address:addressObject.formatted_address})
          }

      var input = document.getElementById('autocomplete');
      if(mainState.service){
        var autocomplete = new window.google.maps.places.Autocomplete(input);
        autocomplete.addListener("place_changed", handlePlaceSelect)
      }
      
      

    },[])



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
          


    console.log("//// address ////\n",address)

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
            <div>
            <div id="navigation" className="w-full h-20 bg-slate-200 sticky top-0 flex justify-center items-center z-10">
              <Image className="h-20 w-48" src={logo}  alt=""/>
            </div>
            
            <div className="flex flex-col justify-center items-center bg-black">
                <Image className="w-full h-[400px] md:h-[600px] opacity-40" src={bg}  alt=""/> 
                {/* enter here your code */}
                <div className='absolute top-[100px] flex items-center justify-center pt-10 w-full'>
                   <input type="text" id="autocomplete" className="border-2 border-slate-300 w-[85%] rounded-md p-2 outline-0 outline-none text-slate-900 bg-slate-100 bg-opacity-80 hover:bg-opacity-90 placeholder-slate-500 " placeholder='Enter address here'/>
                </div>


                {address.address?<div className='absolute top-[350px] md:top-[350px] text-slate-900 border-2 border-slate-200 p-3 px-10 rounded-md bg-slate-200 hover:bg-slate-300 hover:cursor-pointer animate-bounce hover:animate-none' onClick={()=>{
                  dispatch({type:"ADDRESS",address:address.address})
                  dispatch({type:"STEPS",steps:1})
                  setVisible(true)
                }}>Confirm address</div> : null}

                {/* above your code */}
                
            </div>
            <PopUpQ visible={visible} setVisible={setVisible} className="h-[100%]" />

            {/* Service */}
            <div className='bg-white h-[450px] flex items-center justify-center pb-10'>
             
             <div className='flex flex-col space-y-1'>
                <div className="flex flex-row  justify-center pb-10">
                    
                    <div className='relative mx-5 hover:cursor-pointer ' onClick={()=>{
                      router.push("/location")
                      dispatch({type:"SERVICE",service:"Tow"})
                      }}>
                      <IconComponent text="Tow" icon={<Image className='p-3' src={towTruckIcon} alt="Tow truck"/>} />
                    </div>
                  
                    <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                      router.push("/location")
                      dispatch({type:"SERVICE",service:"Tire"})
                      }}>
                      <IconComponent text="Tire" icon={<Image className='p-3' src={flatTireIcon} alt="Change tire"/>} />
                    </div>
                    
                    <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                      router.push("/location")
                      dispatch({type:"SERVICE",service:"Stuck"})
                      }}>
                      <IconComponent text="Stuck" icon={<Image  className='w-[65px] h-[40px]' src={carStuckInMud} alt="Het Help if Stuck"/> } />
                    </div>
                </div>

                <div className="flex flex-row  justify-center">
                  
                  <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                    router.push("/location")
                    dispatch({type:"SERVICE",service:"Fuel"})
                    }}>
                    <IconComponent text="Fuel" icon={<Image className='p-3' src={fuelIcon} alt="Fuel delivery"/>} />
                  </div>
                
                  <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                      router.push("/location")
                      dispatch({type:"SERVICE",service:"Battery"})
                    }}>
                      <IconComponent text="Battery" icon={<Image className='p-3' src={iconBatteries} alt="Jump start"/>} />
                  </div>
                  
                  <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                    router.push("/location")
                    dispatch({type:"SERVICE",service:"Unlock"})
                    }}>
                    <IconComponent text="Unlock" icon={<Image className='p-3' src={unlockIcon} alt="Unlock your Car"/>} />
                  </div>
                
                </div>
             </div>
            
            </div>

            {/* footer */}
            <div className="relative bottom-0 bg-slate-200 text-slate-600 w-full h-20  flex items-center justify-center">
            <h1>All rights reserved 2023</h1>
            </div>

            </div>: <div className="absolute flex items-center justify-center w-full h-full">
              <GridLoader color="#36d7b7" size={15} />
            </div>}

            
         </>

    )

}