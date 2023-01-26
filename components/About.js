import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope} from "react-icons/fa";
import { FaPhoneAlt} from "react-icons/fa";
import { FaClock} from "react-icons/fa";




const AnyReactComponent = () => {
        return(
            <div className="flex flex-col  items-center relative -top-12  hover:cursor-pointer ">
                <FaMapMarkerAlt   className="h-12" size={30} style={{color:"#6366F1"}} />
           </div>
               
        
        )
}

const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

export default function About(){

    const [loc,setLoc]=useState({lat: 29.733021, long: -95.419296})
  

    let defaultProps = {
        center: [loc.lat, loc.long],
        zoom: 11,
        greatPlaceCoords: {lat: loc.lat, lng: loc.long}
      };

      
    

    return(
      
        <div  id="about" className={`relative top-[600px] bg-gray-800 `}>
            
            <div className="" style={{paddingTop:"100px"}}>
                <div className="flex flex-col justify-center items-center ">
                    <div className="" style={{width:"40px",borderTop: "3px white solid"}}></div>
                    <div className="mt-3" style={{color: "white", fontFamily: "libre baskerville", fontWeight:"lighter", fontSize: "26px"}}>About </div>
                </div>
            </div>

            <div className="pt-10 pb-16 flex sm:flex-row flex-col justify-center items-center w-full space-x-0 sm:space-x-10 space-y-10 sm:space-y-0" style={{color:"rgb(121,121,121)",fontSize:"20px"}}>

               
                <div className=" flex flex-col justify-center items-center">    
                    <div className=" "  >
                        <div className="flex flex-row  items-center py-1"> 
                            <FaMapMarkerAlt style={{color:"#6366F1"}} />
                            <p className="pl-3 text-sm md:text-lg" style={{}}>3730 Kirby Dr suite 1200, Houston TX 77098</p>
                          
                        </div> 

                        <div className="flex flex-row  items-center py-1">   
                            <FaEnvelope style={{color:"#6366F1"}}/>
                            <p className="pl-3 text-sm md:text-lg">support@momentum-roadside.com</p>
                        </div>   
                        
                        <div className="flex flex-row  items-center py-1"> 
                            <FaPhoneAlt style={{color:"#6366F1"}}/>
                            <p className="pl-3 text-sm md:text-lg">281-602-8213</p>
                        </div>     

                        <div className="flex flex-row  items-center py-1">     
                            <FaClock style={{color:"#6366F1"}}/>
                            <p className="pl-3 text-sm md:text-lg">24 Hours a day, 7 days a week</p>
                        </div>    
                    </div>
                
                </div>

                <div className='w-96 h-96 md:w-96 md:h-96 sm:w-72 sm:h-72 rounded-xl shadow-2xl filter hover:brightness-90 overflow-hidden  '>
                    <div className='h-full w-full mb-10'  >
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyBpQhB29JAfsoWUbwVJCPocQl2s2cWLMDI" }}
                            // defaultCenter={defaultProps.center}
                            initialCenter={defaultProps.center}
                            center={defaultProps.center}
                            zoom={defaultProps.zoom}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                        >

                            <AnyReactComponent
                                lat={29.733021}
                                lng={ -95.419296}
                            />
                    
                        </GoogleMapReact>

                       


                          
                           
                    
                            
                    </div>
                </div>

            </div>
        </div>
        
    )
}