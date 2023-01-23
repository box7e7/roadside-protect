import { useEffect,useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'




 const initMap=function(){
            console.log("Google API initiated")
            
        }

      


 export default function Address(){

    const [address,setAddress]=useState({address:null})



    useEffect(()=>{

       
        const handlePlaceSelect=function(){
            let addressObject = autocomplete.getPlace()
            // console.log(addressObject.formatted_address)
            setAddress({address:addressObject.formatted_address})
          }

      var input = document.getElementById('autocomplete');
      var autocomplete = new window.google.maps.places.Autocomplete(input);
      autocomplete.addListener("place_changed", handlePlaceSelect)
      

    },[])


    console.log("//// address ////\n",address)


    return (
        <>
         <Head>
             <script  defer src="/scripts/initMap.js"></script>
             <script defer type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJdqzicSsMRPrMk_OVUoQDaMPeNBi-aU&libraries=places&callback=initMap"></script>
         </Head>
         <Script src="/scripts/initMap.js"></Script>
         <div className='flex items-center justify-center pt-10'>
         <input type="text" id="autocomplete" className="border-2 border-slate-300 w-[80%] rounded-md p-2 outline-2 outline-slate-400 text-slate-600" placeholder='Enter address here'/>
         </div>
         

        </>
    )
}