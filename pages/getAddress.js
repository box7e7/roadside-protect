
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
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
                
            </div>

            <div className='bg-gray-100 pb-8 pt-1'>
              <div className="flex flex-row  justify-center m-10">
                <div className='relative mx-5' onClick={()=>{
                  router.push("/location")
                }}>
                <IconComponent text="Tow" icon={<Image className='p-3' src={towTruckIcon}/>} />
                </div>
              
                <div className='relative mx-5'>
                <IconComponent text="Tire" icon={<Image className='p-3' src={flatTireIcon}/>} />
                </div>
                <div className='relative mx-5'>
                <IconComponent text="Stuck" icon={<Image  className='w-[65px] h-[40px]' src={carStuckInMud}/>} />
                </div>
              </div>

              <div className="flex flex-row  justify-center m-10">
                <div className='relative mx-5'>
                <IconComponent text="Fuel" icon={<Image className='p-3' src={fuelIcon}/>} />
                </div>
              
                <div className='relative mx-5'>
                <IconComponent text="Battery" icon={<Image className='p-3' src={iconBatteries}/>} />
                </div>
                <div className='relative mx-5'>
                <IconComponent text="Unlock" icon={<Image className='p-3' src={unlockIcon}/>} />
                </div>
              </div>
            </div>

            
         </>

    )

}