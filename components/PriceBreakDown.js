import React, { useState } from 'react';


const BreakDown=(mainState)=>{

    if( mainState.service=="Tow Service"){
        return(
            <div className="mt-4">
                {mainState.vehicle["Medium Duty"]=="Yes" ? <li>Hook up: <i>125$ Medium Duty</i></li> : <li>Hook up: <i>90$ Light Duty</i></li>}
                {mainState.questions.BrokenAxle=="Yes"  ? (mainState.vehicle["Medium Duty"]=="Yes" ? <li>Vehicle Broken Axle fees: <i>125$</i></li> : <li>Vehicle Broken Axle fees: <i>90$</i></li>) : null}
                {mainState.vehicle["Medium Duty"]=="Yes" ? <li>Loaded miles are {mainState.distance}: <i>10$ per mile</i></li> : <li>Loaded miles are {mainState.distance}: <i>5$ per mile</i></li>}
            </div>
        )
    }
    else if(mainState.service=="Jump Start" || mainState.service=="Tire Change" || mainState.service=="Lock Out"){
        return(
            <div className="mt-4">
                <p>{mainState.service}: 65$</p>
            </div>
        )
    }
    else if(mainState.service=="Fuel Delivery"){
        return(
            <div className="mt-4">
                <p>{mainState.service}: 75$</p>
            </div>
        )
    }
   

    
}

const PriceBreakdownComponent = ({mainState}) => {
  const [isPriceBreakdownVisible, setPriceBreakdownVisible] = useState(false);

  const togglePriceBreakdown = () => {
    setPriceBreakdownVisible(!isPriceBreakdownVisible);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="w-[400px] mx-auto">
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex justify-between items-center cursor-pointer" onClick={togglePriceBreakdown}>
            <h1></h1>
            <h2 className="font-semibold text-sm text-slate-800 text-center">Price Breakdown</h2>
            <svg className={`w-6 h-6 transform transition-transform duration-200 ${isPriceBreakdownVisible ? '-rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          {isPriceBreakdownVisible && (
           BreakDown(mainState)
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceBreakdownComponent;
