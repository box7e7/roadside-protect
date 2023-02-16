
import { useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
import Context from "../components/ContextFile";
// import bg from "../images/blue_bg1.png"
import bg from "../images/blue_bg3.jpg"
import logo from "../images/logo_momentum.png"
import clock from "../images/fast.png"
import {FaArrowDown} from 'react-icons/fa'
import Service from '../components/Services'






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
            <Service/>
            
            {/* footer */}
            <div className="relative bottom-0 bg-slate-200 text-slate-600 w-full h-20  flex items-center justify-center">
            <h1>All rights reserved 2023</h1>
            </div>

            
         </div>

    )

}