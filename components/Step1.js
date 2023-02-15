
import { useContext,useState,useEffect } from 'react';
import Context from "./ContextFile"
import TowQuestions from './TowQuestions';
import TiresQuestions from './TiresQuestions';
import WinchOutQuestions from './WinchOutQuestions';
import FuelQuestions from './FuelQuestions';
import BatteryQuestions from './BatteryQuesstions';
import UnlockQuestions from './UnlockQuestions';






export default  function Step1(){
  
  
    const {mainState,dispatch}=useContext(Context)

  
   


    console.log("///// from step1 //////",mainState.service)
   
    return (
        <div>
            {mainState.service=="Tow Service" ? <TowQuestions/> : null}
            {mainState.service=="Tire Change" ? <TiresQuestions/> : null}
            {mainState.service=="Winch Out" ?< WinchOutQuestions/> : null}
            {mainState.service=="Fuel Delivery" ? <FuelQuestions/> : null}
            {mainState.service=="Jump Start" ? <BatteryQuestions/> : null}
            {mainState.service=="Lock out" ? <UnlockQuestions/> : null}

        </div>
    )
}

