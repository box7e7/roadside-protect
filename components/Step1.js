
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
            {mainState.service=="Tow" ? <TowQuestions/> : null}
            {mainState.service=="Tire" ? <TiresQuestions/> : null}
            {mainState.service=="Winch out" ?< WinchOutQuestions/> : null}
            {mainState.service=="Fuel" ? <FuelQuestions/> : null}
            {mainState.service=="Battery" ? <BatteryQuestions/> : null}
            {mainState.service=="Unlock" ? <UnlockQuestions/> : null}

        </div>
    )
}

