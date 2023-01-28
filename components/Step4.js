
import {Button} from 'flowbite-react'


export default function Step4(){

    return(
        <>

            <div className="flex justify-center items-center flex-col">
                <div className='flex justify-center items-center flex-col pb-10'>
                    {/* <Image className="h-36 w-48 mb-10" src={car}  alt=""/> */}
                    <div className='text-2xl font-bold'>Contact Information</div>
                </div>

                <input className="mb-7 w-[90%] p-2 outline-slate-200 outline focus:outline-red-300 focus:outline-2 rounded-md" type="text" id="contact_first" name="first"  placeholder="First Name" onChange={(e)=>{
                    console.log(e.target.value)
                }}/>

                <input className="mb-7 w-[90%] p-2 outline-slate-200 outline focus:outline-red-300 focus:outline-2 rounded-md" type="text" id="contact_last" name="last"  placeholder="Last Name" onChange={(e)=>{
                    console.log(e.target.value)
                }}/>

                <input className="mb-7 w-[90%] p-2 outline-slate-200 outline focus:outline-red-300 focus:outline-2 rounded-md" type="text" id="contact_email" name="email"  placeholder="Email" onChange={(e)=>{
                    console.log(e.target.value)
                }}/>

                <input className="mb-10 w-[90%] p-2 outline-slate-200 outline focus:outline-red-300 focus:outline-2 rounded-md" type="text" id="contact_phone" name="phone"  placeholder="Phone Number" onChange={(e)=>{
                    console.log(e.target.value)
                }}/>


                <Button pill={true} className='w-[70%] font-bold mb-10' onClick={function(){

                }}>
                  <div className='text-lg'>Next</div>
                </Button>
                     
                       
            </div>
        
        </>
    )
}