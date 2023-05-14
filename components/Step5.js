import {useContext,useEffect, useState} from 'react'
import {Button,Card} from 'flowbite-react'
import Context from "../components/ContextFile";
import {db,doc,getDoc, collection, getDocs,addDoc,onSnapshot} from "../firebase/firebase"
import PriceBreakdownComponent from "../components/PriceBreakDown"


const dispatchJob=async function(mainState,dispatch,total){
    
    let obj={
        date:Date(),
        email:mainState.customerInfo.email,
        items:[{amount:total*100,currency:'usd',description:mainState.service}],
        service:{
            address:mainState.address,
            contactInfo:{name:mainState.customerInfo.fullName,email:mainState.customerInfo.email,phone:mainState.customerInfo.phone},
            destinationAddress:mainState.service=="Tow Service" ? mainState.dropoffAddress: null,
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
        
        // mainState.distance ? (mainState.distance>0 ? setTotal(Math.ceil(90+(mainState.distance)*5)) : setTotal()) : setTotal(90)

        
            if(mainState.service=="Tow Service"){
                if(mainState.distance){
                    if(mainState.distance>0){
                        if(mainState.vehicle["Medium Duty"]=="Yes"){
                            mainState.questions.BrokenAxle=="Yes" ? setTotal(Math.ceil(125+(mainState.distance)*10)+ 125) : setTotal(Math.ceil(90+(mainState.distance)*5))
                        }
                        else{
                            mainState.questions.BrokenAxle=="Yes" ? setTotal(Math.ceil(90+(mainState.distance)*5)+ 90 ) : setTotal(Math.ceil(90+(mainState.distance)*5))
                        }
                        
                    }
                    else{
                        if(mainState.vehicle["Medium Duty"]=="Yes"){
                            mainState.questions.BrokenAxle=="Yes" ? setTotal(125 + 125) : setTotal(125)
                        }
                        else{
                            mainState.questions.BrokenAxle=="Yes" ? setTotal(90 + 90 ) : setTotal(90)
                        }
                    }
                }
                else{
                    if(mainState.vehicle["Medium Duty"]=="Yes"){
                        mainState.questions.BrokenAxle=="Yes" ? setTotal(125 + 125) : setTotal(125)
                    }
                    else{
                        mainState.questions.BrokenAxle=="Yes" ? setTotal(90 + 90 ) : setTotal(90)
                    }
               }

            }
            else if(mainState.service=="Jump Start" || mainState.service=="Tire Change" || mainState.service=="Lock Out" ){
                setTotal(65)
            }
            else if(mainState.service=="Fuel Delivery"){
                setTotal(75)
            }
            else if(mainState.service=="Winch Out"){
                if(mainState.vehicle["Medium Duty"]=="Yes"){
                    setTotal(150) 
                }
                else{
                    setTotal(125) 
                }
            }
        
       
    },[])


    return(
        <>

        <div className="flex justify-center items-center flex-col">
            <div className='flex justify-center items-center flex-col pb-0'>
                {/* <Image className="h-36 w-48 mb-10" src={car}  alt=""/> */}
                <div className='text-2xl font-bold'>GET HELP NOW</div>
                <div className='text-[#11A9C9] text-4xl  font-bold font-serif '>${total.toFixed(2)}</div>
                
            </div>
            <PriceBreakdownComponent mainState={mainState}/>

            <div className='border-2 border-slate-200 w-full py-2 text-center bg-slate-400 text-white rounded-md font-bold'>Requested Job</div>
            <div className='mt-1 p-3 text-slate-700'>{`${mainState.service}`}</div>

            <div className='border-2 border-slate-200 w-full py-2 text-center bg-slate-400 text-white rounded-md font-bold'>Location</div>
            <div className='mt-1 p-3 text-slate-700'>{`${mainState.address} Service`}</div>

            {mainState.service=="Tow Service" ?
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