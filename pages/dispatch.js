
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



async function find_records(prisma) {
    const users = await prisma.reviews.findMany()
    console.log(users)
    return users
   }
  
  
  export async function getServerSideProps(){
  
    const prisma = new PrismaClient()
    return find_records(prisma)
    .then(async (res) => {
    //   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n",res)
      await prisma.$disconnect()
      return{
        props:{
            data:res
        }
    }
      
    

    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()

      return{
        props:{
            data:[]
        }
    }

     
    })
  
     
  }





export default function Design({data}){

  const router = useRouter()
  const {mainState,dispatch}=useContext(Context)
  console.log("///// step 1 ///////\n", mainState)

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
                {/* enter here your code */}
                <Image className='absolute top-[120px] w-[65px] h-[50px]' src={clock}/>
                <h1 className="absolute top-[175px] text-white">FAST HELP</h1>
                <div className='absolute top-[180px] md:top-[200px] text-center flex flex-col items-center pt-10 ml-1 '>
                  <h1 className="text-white text-3xl mb-4"> SELECT SERVICE TO</h1>
                  <h3 className="text-white mb-4 text-xl">GET STARTED</h3>
                </div>
                <FaArrowDown  className="absolute top-[350px] md:top-[400px] text-white animate-bounce h-30" size={80}/>
                {/* above your code */}
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