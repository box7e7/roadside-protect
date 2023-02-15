
import validator from 'validator'
import {useContext,useEffect} from 'react'
import {Button} from 'flowbite-react'
import Context from "../components/ContextFile";



function onChangeTextName(e) {
   
    // console.log(e.target.value)
    if (e.target.value.length!==0){
      document.querySelector('#contact_name').classList.replace('outline-slate-200','outline-green-300')
      document.querySelector('#contact_name').classList.replace('outline-red-300','outline-green-300')
      document.querySelector('#contact_name').classList.replace('focus:outline-red-300','focus:outline-green-300')
    }
    else{
      document.querySelector('#contact_name').classList.replace('outline-green-300','outline-red-300')
      document.querySelector('#contact_name').classList.replace('focus:outline-green-300','focus:outline-red-300')
    }
  }


function onChangeEmail(e) {
 
    // console.log(e.target.value)
    if (validator.isEmail(document.querySelector('#contact_email').value)){
      document.querySelector('#contact_email').classList.replace('outline-slate-200','outline-green-300')
      document.querySelector('#contact_email').classList.replace('outline-red-300','outline-green-300')
      document.querySelector('#contact_email').classList.replace('focus:outline-red-300','focus:outline-green-300')
    }
    else {
      document.querySelector('#contact_email').classList.replace('outline-green-300','outline-red-300')
      document.querySelector('#contact_email').classList.replace('outline-slate-200','outline-red-300')
      document.querySelector('#contact_email').classList.replace('focus:outline-green-300','focus:outline-red-300')
    }
    }

function onChangePhoneNumber(e) {

    // console.log(validator.isMobilePhone(document.querySelector('#contact_phone').value))
    if (validator.isMobilePhone(document.querySelector('#contact_phone').value)){
        document.querySelector('#contact_phone').classList.replace('outline-slate-200','outline-green-300')
        document.querySelector('#contact_phone').classList.replace('outline-red-300','outline-green-300')
        document.querySelector('#contact_phone').classList.replace('focus:outline-red-300','focus:outline-green-300')
    }
    else if(!validator.isMobilePhone(document.querySelector('#contact_phone').value)){
        document.querySelector('#contact_phone').classList.replace('outline-green-300','outline-red-300')
        document.querySelector('#contact_phone').classList.replace('outline-slate-200','outline-red-300')
        document.querySelector('#contact_phone').classList.replace('focus:outline-green-300','focus:outline-red-300')
    }
    }

function getData(e,dispatch){

        const userName=document.querySelector('#contact_name').value
        const email=document.querySelector('#contact_email').value
        const phone=document.querySelector('#contact_phone').value
        
      
      
        let isMobilePhone=validator.isMobilePhone(document.querySelector('#contact_phone').value)
        let isEmail=validator.isEmail(document.querySelector('#contact_email').value)
        let textName= document.querySelector('#contact_name').value.length!==0 ? true : false
    
        
        if(isMobilePhone && isEmail && textName){
      
           dispatch({type:"CUSTOMERINFO",customerInfo:{fullName:userName,email:email,phone:phone}})
           dispatch({type:"STEPS",steps:5})
        
        }
        else{
      
          }
      
        }

export default function Step4(){

    const {mainState,dispatch}=useContext(Context)

    // console.log(mainState)
    if(mainState.service=="Tow Service"){
      useEffect(()=>{
        const source = mainState.address;
        const destination = mainState.dropoffAddress;
        // const host='http://localhost:3000'
        const host='https://dallas.mehdi.cloud'
        fetch(`${host}/api/getDistance?source=${source}&destination=${destination}`).then(res=>{
          res.json().then(body=>{
            if(body.distance){
              console.log("//// From step 4 /////",body.distance)
              dispatch({type:"DISTANCE",distance:body.distance})
            }
            else if(body.error){
              console.log("//// From step 4 error message /////",body.error)
            }
            else{
              console.log("/////  unknown error ///// ")
            }
          })
        })
      },[])
    }
    

    return(
        <>

            <div className="flex justify-center items-center flex-col">
                <div className='flex justify-center items-center flex-col pb-10'>
                    {/* <Image className="h-36 w-48 mb-10" src={car}  alt=""/> */}
                    <div className='text-2xl font-bold'>Contact Information</div>
                </div>

                <input className="mb-7 w-[90%] p-2 outline-slate-200 outline focus:outline-red-300 focus:outline-2 rounded-md" type="text" id="contact_name" name="first"  placeholder="Full Name" onChange={onChangeTextName}/>

                <input className="mb-7 w-[90%] p-2 outline-slate-200 outline focus:outline-red-300 focus:outline-2 rounded-md" type="text" id="contact_email" name="email"  placeholder="Email" onChange={onChangeEmail}/>

                <input className="mb-10 w-[90%] p-2 outline-slate-200 outline focus:outline-red-300 focus:outline-2 rounded-md" type="text" id="contact_phone" name="phone"  placeholder="Phone Number" onChange={onChangePhoneNumber}/>


                <Button pill={true} className='w-[70%] font-bold mb-10' onClick={function(e){
                    getData(e,dispatch)
                }}>
                  <div className='text-lg'>Next</div>
                </Button>
                     
                       
            </div>
        
        </>
    )
}