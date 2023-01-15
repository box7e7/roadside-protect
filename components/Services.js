
import Image from 'next/image'
import towTruck from '../images/tow-truck-icon_blue.png';
import bateryIcon  from "../images/icon-batteries_blue.png";
import unlockIcon   from "../images/unlock-icon_blue.png";
import flatTire from "../images/flat-tire-icon_blue.png";
import fuelIcon from "../images/fuel-icon_blue.png";
import carStuck from "../images/car_stuck_in_mud_1_blue.png";
import bateryIcon0 from "../images/icon_battery_0.png";
import unlockIcon0   from "../images/icon_lockout_0.png";


export default function Service(){
    return(
        <div id="services" className="relative top-[200px] ">

            <div className="" style={{paddingTop:"0px",paddingBottom:"60px"}}>
                <div className="flex flex-col justify-center items-center ">
                    <div className="" style={{width:"40px",borderTop: "3px black solid"}}></div>
                    <div className="mt-3" style={{color: "black", fontFamily: "libre baskerville", fontWeight:"lighter", fontSize: "26px"}}>Services </div>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-10 ml-10 mr-10'>
                <div className='flex flex-col justify-center items-center shadow hover:shadow-lg hover:rounded-xl h-48'>
                    <Image className="mx-auto pt-2" src={towTruck} style={{width:"80px",height:"50px"}} alt=""/>
                    <p className='pt-[0px]'>Towing</p>
                </div>
                
                <div className='flex flex-col justify-center items-center shadow hover:shadow-lg hover:rounded-xl h-48'>
                    <Image className="mx-auto pt-2" src={bateryIcon0} style={{width:"80px",height:"60px"}} alt=""/>
                    <p>Jump start</p>
                </div>

                <div className='flex flex-col justify-center items-center shadow hover:shadow-lg hover:rounded-xl h-48' >
                    <Image className="mx-auto pt-2" src={unlockIcon0} style={{width:"80px",height:"60px"}} alt=""/>
                    <p>Lockout</p>
                </div>

                <div className='flex flex-col justify-center items-center shadow hover:shadow-lg hover:rounded-xl h-48'>
                    <Image className="mx-auto pt-2" src={flatTire} style={{width:"80px",height:"50px"}} alt=""/>
                    <p>Flat Tire</p>
                </div>

                <div className='flex flex-col justify-center items-center shadow hover:shadow-lg hover:rounded-xl h-48'>
                    <Image className="mx-auto pt-2" src={fuelIcon} style={{width:"70px",height:"70px"}} alt=""/>
                    <p>Fuel</p>
                </div>
                
               <div className='flex flex-col justify-center items-center shadow hover:shadow-lg hover:rounded-xl'>
                    <Image className="mx-auto pt-2" src={carStuck} style={{width:"80px",height:"60px"}} alt=""/>
                    <p>Stuck</p>
               </div>

            </div>
         
        </div>
    )
}