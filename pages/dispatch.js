
import { useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
import Context from "../components/ContextFile";
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
import {FaArrowDown} from 'react-icons/fa'








export default function Design(){

  const router = useRouter()
  const {mainState,dispatch}=useContext(Context)
  // console.log("///// step 1 ///////\n", mainState)

   return(

         <div>
            <Head>
              <script  defer src="/scripts/initMap.js"></script>
              <script defer type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJdqzicSsMRPrMk_OVUoQDaMPeNBi-aU&libraries=places&callback=initMap"></script>
            </Head>
            <Script src="/scripts/initMap.js"></Script>
            
            {/* Header Navigation */}
            <div id="navigation" className="w-full h-20 bg-slate-200 sticky top-0 flex justify-center items-center z-10">
              <Image className="h-20 w-48" src={logo}  alt="logo"/>
            </div>
            
            {/* Main Home */}
            <div className="flex flex-col justify-center items-center bg-black">
                <Image className="w-full h-[400px] md:h-[600px] opacity-40" src={bg}  alt="bg"/> 
                {/* enter here your code */}
                <Image className='absolute top-[120px] w-[65px] h-[50px]' src={clock} alt="clock" />
                <h1 className="absolute top-[175px] text-white">FAST HELP</h1>
                <div className='absolute top-[180px] md:top-[200px] text-center flex flex-col items-center pt-10 ml-1 '>
                  <h1 className="text-white text-3xl mb-4"> SELECT SERVICE TO</h1>
                  <h3 className="text-white mb-4 text-xl">GET STARTED</h3>
                </div>
                <FaArrowDown  className="absolute top-[350px] md:top-[400px] text-white animate-bounce h-30" size={80}/>
                {/* above your code */}
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

            
         </div>

    )

}