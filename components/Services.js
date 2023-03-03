
import { useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Context from "../components/ContextFile";
import IconComponent from '../components/IconComponent'
import towTruckIcon from "../images/tow-truck-icon_blue.png"
import flatTireIcon from "../images/flat-tire-icon_blue.png"
import carStuckInMud from "../images/car_stuck_in_mud_1_blue.png"
import fuelIcon from "../images/fuel-icon_blue.png"
import iconBatteries from "../images/icon_battery_0.png"
import unlockIcon from "../images/icon_lockout_0.png"
import motorCycle from "../images/motorCycle.png"




export default function Service(){
    const {mainState,dispatch}=useContext(Context)
    const router = useRouter()
    return(
       
             <div className='bg-white h-[550px] flex items-center justify-center pb-10 pt-20'>
             
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



              
              


                <div className="flex flex-row  justify-center pb-10">
                  
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

                {/* 00000000 */}
                <div className="flex flex-row  justify-center pb-20">
                  
                  <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                    router.push("/location")
                    dispatch({type:"SERVICE",service:"Fuel Delivery"})
                    }}>
                    {/* <IconComponent text="Fuel Delivery" icon={<Image className='p-3' src={fuelIcon} alt="Fuel delivery"/>} /> */}
                  </div>
                
                  <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                      router.push("/location")
                      dispatch({type:"SERVICE",service:"Tow Motorcycle"})
                    }}>
                      <IconComponent text="Tow Motorcycle" icon={<Image className='p-3' src={motorCycle} alt="MotorCylce"/>} />
                  </div>
                  
                  <div className='relative mx-5 hover:cursor-pointer 'onClick={()=>{
                    router.push("/location")
                    dispatch({type:"SERVICE",service:"Lock Out"})
                    }}>
                    {/* <IconComponent text="Lock Out" icon={<Image className='p-3' src={unlockIcon} alt="Unlock your Car"/>} /> */}
                  </div>
                
                </div>
                {/* 0000000000 */}
             
             
             
             
             </div>



            </div>
         
      
    )
}