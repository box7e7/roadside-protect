import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope} from "react-icons/fa";
import { FaPhoneAlt} from "react-icons/fa";
import { FaClock} from "react-icons/fa";



export default function About(){

    let defaultProps = {
        center: [29.712020, -95.510040],
        zoom: 10,
        greatPlaceCoords: {lat: 29.712020, lng: -95.510040}
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
                        <div className="flex flex-row  items-center"> 
                            <FaMapMarkerAlt style={{color:"#6366F1"}} />
                            <p className="pl-3" style={{}}>7203 Bellerive Dr Houston TX</p>
                        </div> 

                        <div className="flex flex-row  items-center">   
                            <FaEnvelope style={{color:"#6366F1"}}/>
                            <p className="pl-3">support@momentum-roadside.com</p>
                        </div>   
                        
                        <div className="flex flex-row  items-center"> 
                            <FaPhoneAlt style={{color:"#6366F1"}}/>
                            <p className="pl-3">713-542-4467</p>
                        </div>     

                        <div className="flex flex-row  items-center">     
                            <FaClock style={{color:"#6366F1"}}/>
                            <p className="pl-3">24 Hours a day, 7 days a week</p>
                        </div>    
                    </div>
                
                </div>

                <div className='w-96 h-96 md:w-96 md:h-96 sm:w-72 sm:h-72 rounded-xl shadow-2xl filter hover:brightness-90 overflow-hidden  '>
                    <div className='h-[100%] w-[100%] mb-10'  >
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyBpQhB29JAfsoWUbwVJCPocQl2s2cWLMDI" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        yesIWantToUseGoogleMapApiInternals
                        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                        >
                    
                        </GoogleMapReact>
                    </div>
                </div>

            </div>
        </div>
        
    )
}