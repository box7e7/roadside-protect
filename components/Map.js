import React,{useContext} from "react";
import { useRouter } from 'next/router'
import Context from "../components/ContextFile";
import GoogleMapReact from 'google-map-react';




const AnyReactComponent = ({ loc,dispatch,textArea,setVisible }) => {

    const router = useRouter()
    // console.log("////// loc from  Map component ///////\n",loc)
    return(
       <div className="flex flex-col  items-center relative -top-16  hover:cursor-pointer ">
            <div  className="w-48 h-10 text-white rounded-md flex justify-center items-center relative  bg-green-600 hover:bg-green-700" onClick={()=>{
                console.info("/////// clicked ////////")
            }}>
                <div className="flex justify-center items-center" onClick={()=>{
                    console.info("/////// clicked ////////")
                    dispatch({type:"ADDRESS",address:textArea.street})
                    dispatch({type:"STEPS",steps:1})
                    setVisible(true)
                    // router.push("/dispatch")

                }}>
                    <h1 className=" text-lg ">Confirm address</h1>
                    <div className="w-5 h-5 rounded-full bg-white text-green-600 text-center ml-2 flex items-center justify-center text-lg font-bold ">
                        <h1>&gt;</h1>
                    </div>
                </div>
                
            </div>

            <div className="w-1 h-6 bg-green-600  hover:bg-green-700"></div>
            <div className=" w-4 h-2  bg-green-600 rounded-md  -top-2 relative  hover:bg-green-700 "></div>
           
        </div>
    // <h1>{text}</h1>
    )
};
const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

export default function Map({loc,textArea,setVisible}) {

    let defaultProps = {
        center: [loc.lat, loc.long],
        zoom: 11,
        // greatPlaceCoords: {lat: 29.712020, lng: -95.510040}
        greatPlaceCoords: {lat: loc.lat, lng: loc.long}
      };

      const {mainState,dispatch}=useContext(Context)
  
  
    return (
       
          
          
          
      
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBpQhB29JAfsoWUbwVJCPocQl2s2cWLMDI" }}
            initialCenter={defaultProps.center}
            // defaultCenter={defaultProps.center}
            center={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            <AnyReactComponent 
              lat={loc.lat}
              lng={loc.long}
              text="My Marker"
              loc={loc}
              dispatch={dispatch}
              textArea={textArea}
              setVisible={setVisible}
            />
          </GoogleMapReact>
         
    );
  }