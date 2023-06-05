import Image from 'next/image'
import { useRouter } from 'next/router';
import PopUpForm from "../components/PopUpForm"
import bg from "../images/2021-01-28_grey.png"

export default function MainHome(){

    const router = useRouter();

    return (
        
        <div id="home" className='  w-full relative flex justify-center  top-[0px]'>

            <div style={{height:600}} className='absolute w-full  bg-black flex justify-center -z-10 top-[0px] '>
                <Image className='relative h-full w-full  opacity-40 object-cover' src={bg}   alt="Picture of the author"/>
            </div>

            
            <div style={{height:500}} className=" text-center pt-24 flex flex-col  items-center  ">

                {/* <button  className="bg-[#585af1] rounded-md text-white text-lg" style={{width:"250px", height:"50px", marginTop:"0px",fontFamily:"open sans"}}  data-toggle="modal" data-target="#QuoteModal" onClick={()=>{
                    router.push('/joinUs')
                }} >
                Join Our Provider Network</button> */}
                <button  className="bg-white rounded-md" style={{width:"150px", height:"50px", marginTop:"50px",fontFamily:"open sans"}}  data-toggle="modal" data-target="#QuoteModal" onClick={()=>{

                  document.getElementById("QuoteModal").classList.remove("hidden")
                  document.getElementById("QuoteModal").classList.remove("block")
                  document.getElementById("roadside").classList.add("overflow-hidden")
                }} >GET QUOTE</button>
                <h1 className="text-white md:text-4xl pt-10 text-2xl " >WE PROVIDE HIGHEST QUALITY</h1>
                <h1 className=" text-[#6366F1] md:text-3xl text-xl" >TOWING & ROADSIDE SERVICES</h1>
                <p className=" text-gray-400 md:text-sm pt-3 text-xs" > Fast courteous and inexpensive towing and</p>
                <p className="text-gray-400 md:text-sm text-xs" > roadside assistance in Houston,TX</p>
            </div>


            

            <PopUpForm/>

        </div>
  
    )

}