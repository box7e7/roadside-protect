import {useContext,useEffect, useState} from 'react'
import {Button,Card} from 'flowbite-react'
import Context from "../components/ContextFile";
import {db,doc,getDoc, collection, getDocs,addDoc,onSnapshot} from "../firebase/firebase"


const dispatchJob=async function(mainState,dispatch,total){
    
    let obj={
        date:Date(),
        email:mainState.customerInfo.email,
        items:[{amount:total*100,currency:'usd',description:mainState.service}],
        service:{
            address:mainState.address,
            contactInfo:{name:mainState.customerInfo.fullName,email:mainState.customerInfo.email,phone:mainState.customerInfo.phone},
            destinationAddress:mainState.service=="Tow" ? mainState.dropoffAddress: null,
            serviceType:mainState.service,
            vehicleInformation:{make:mainState.vehicle.make,model:mainState.vehicle.model,color:mainState.vehicle.color,year:mainState.vehicle.year}
        }}

   const docRef = await addDoc(collection(db, "invoices"), obj);
      console.log("Document written with ID: ", docRef.id);

      const unsub = onSnapshot(doc(db, "invoices", docRef.id), (doc) => {
        console.log("Current data: ", doc.data());
        doc.data().stripeInvoiceUrl ? dispatch({type:"STRIPEURL",stripeURL:doc.data().stripeInvoiceUrl}) : null
        doc.data().stripeInvoiceStatus ? dispatch({type:'INVOICESTATUS',invoiceStatus:doc.data().stripeInvoiceStatus}) : null
        doc.data().stripeInvoiceId ? dispatch({type:'INVOICEID',invoiceId:doc.data().stripeInvoiceId}) : null
    });
    }


export default function Step5(){

    const [total,setTotal]=useState(0)
    const {mainState,dispatch}=useContext(Context) 
   

    useEffect(()=>{
        console.log({date:Date(),email:mainState.customerInfo.email,items:[{amount:10000,currency:'usd',description:mainState.service}],
        service:{
            address:mainState.address,
            contactInfo:{name:mainState.customerInfo.fullName,email:mainState.customerInfo.email,phone:mainState.customerInfo.phone},
            destinationAddess:mainState.dropoffAddress,
            serviceType:mainState.service,
            vehicleInformation:{make:mainState.vehicle.make,model:mainState.vehicle.model,color:mainState.vehicle.color,year:mainState.vehicle.year}
        }})

        mainState.distance ? setTotal(Math.ceil(75+(mainState.distance-5)*3.5)) : setTotal(75)
       
    },[])


    return(
        <>

        <div className="flex justify-center items-center flex-col">
            <div className='flex justify-center items-center flex-col pb-10'>
                {/* <Image className="h-36 w-48 mb-10" src={car}  alt=""/> */}
                <div className='text-2xl font-bold'>GET HELP NOW</div>
                <div className='text-[#11A9C9] text-4xl  font-bold font-serif '>${total.toFixed(2)}</div>
            </div>

            <div className='border-2 border-slate-200 w-full py-2 text-center bg-slate-400 text-white rounded-md font-bold'>Requested Job</div>
            <div className='mt-1 p-3 text-slate-700'>{`${mainState.service} Service`}</div>

            <div className='border-2 border-slate-200 w-full py-2 text-center bg-slate-400 text-white rounded-md font-bold'>Location</div>
            <div className='mt-1 p-3 text-slate-700'>{`${mainState.address} Service`}</div>

            {mainState.service=="Tow" ?
            <>
                <div className='border-2 border-slate-200 w-full py-2 text-center bg-slate-400 text-white rounded-md font-bold'>Drop off</div>
                <div className='mt-1 p-3 text-slate-700'>{`${mainState.dropoffAddress} Service`}</div>
            </>
            :
            null}

            <div className='border-2 border-slate-200 w-full py-2 text-center bg-slate-400 text-white rounded-md font-bold'>Contact</div>
            <div className='mt-1 p-3 text-slate-700'>
                <div>{`${mainState.customerInfo.fullName}`}</div>
                <div>{`${mainState.customerInfo.email}`}</div>
                <div>{`${mainState.customerInfo.phone}`}</div>
            </div>

            <div className='w-full flex items-center justify-center py-10'>
                    <Button pill={true} className='w-[70%] font-bold' onClick={()=>{
                        dispatchJob(mainState,dispatch,total)
                        dispatch({type:"STEPS",steps:6})
                        
                    }}>
                        <div className='text-lg'>Get Help Now</div>
                    </Button>
                </div>


                

        </div>
        
        </>
    )
}