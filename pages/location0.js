import { useState,useContext,useEffect } from "react";
// import { useRouter } from 'next/router'
import Context from "../components/ContextFile";
import Map from "../components/Map";
// import Script from 'next/script'


const geoLoc=(setLoc,setAgent)=>{
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
  
      const success=(position)=>{
        setLoc({lat:position.coords.latitude,long:position.coords.longitude})
        dispatch({type:"LOCATION",location:{lat:position.coords.latitude,long:position.coords.longitude}})
      }
  
      const error=(error)=>{
      
        alert(`Error code: ${error.code}\nError Message: ${error.message}\nTo enable your location please access to: Settings > Privacy > Location Service > enable it for Browser application`);
      
      }
  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success,error,options);
        
    } else {
        // Make API call to the GeoIP services
    }
    
     setAgent(window.navigator.userAgentData)
}


export default function Location(){

   
  
    // const [loc,setLoc]=useState({lat: null, long: null})
    const [loc,setLoc]=useState({lat: 29.712020, long: -95.510040})
    const [agent,setAgent]=useState(null)
    const {mainState,dispatch}=useContext(Context)
    console.log("/////// loc ////////\n",loc)
    return(

        <>
            {/* <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJdqzicSsMRPrMk_OVUoQDaMPeNBi-aU&libraries=places"/>
            <Script src="/script.js"/> */}
            <div  style={{ height: '100vh', width: '100%' }} className="flex pt-4   items-center flex-col bg-slate-500">
            
                {/* {loc.lat ? <div className="w-full pb-10 h-3/4"> <Map loc={loc} /> </div> :null} */}
                <input id="autocomplete"  className="absolute top-10 bg-slate-500 z-10 w-[95%] p-2 rounded-md text-white outline-1 outline-slate-500" type="text" placeholder="Enter address here"/>
                <div className="w-[100%] h-[400px]  overflow-hidden">
                    <div className="w-full  h-full"> 
                        <Map loc={loc} dispatch={dispatch} /> 
                    </div> 
                </div>
            
                <div className="pt-10">
                        <button className=" bg-orange-300 hover:bg-orange-400  text-slate-50 rounded-lg  h-12 w-52 text-2xl  " onClick={()=>{
                            geoLoc(setLoc,setAgent)
                        }}>
                            Find Me
                        </button>
                </div>

            </div>
        </>
        
    ) 
}