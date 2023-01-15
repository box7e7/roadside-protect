import validator from 'validator'


function onChangeTextName(e) {
   
  // console.log(e.target.value)
  if (e.target.value.length!==0){
    document.querySelector('#textName').classList.replace('outline-slate-200','outline-green-300')
    document.querySelector('#textName').classList.replace('outline-red-300','outline-green-300')
    document.querySelector('#textName').classList.replace('focus:outline-red-300','focus:outline-green-300')
  }
  else{
    document.querySelector('#textName').classList.replace('outline-green-300','outline-red-300')
    document.querySelector('#textName').classList.replace('focus:outline-green-300','focus:outline-red-300')
  }
}

function onChangePhoneNumber(e) {
 
console.log(validator.isMobilePhone(document.querySelector('#phoneNumber').value))
if (validator.isMobilePhone(document.querySelector('#phoneNumber').value)){
  document.querySelector('#phoneNumber').classList.replace('outline-slate-200','outline-green-300')
  document.querySelector('#phoneNumber').classList.replace('outline-red-300','outline-green-300')
  document.querySelector('#phoneNumber').classList.replace('focus:outline-red-300','focus:outline-green-300')
}
else if(!validator.isMobilePhone(document.querySelector('#phoneNumber').value)){
  document.querySelector('#phoneNumber').classList.replace('outline-green-300','outline-red-300')
  document.querySelector('#phoneNumber').classList.replace('outline-slate-200','outline-red-300')
  document.querySelector('#phoneNumber').classList.replace('focus:outline-green-300','focus:outline-red-300')
}
}


function onChangeEmail(e) {
 
// console.log(e.target.value)
if (validator.isEmail(document.querySelector('#textEmail').value)){
  document.querySelector('#textEmail').classList.replace('outline-slate-200','outline-green-300')
  document.querySelector('#textEmail').classList.replace('outline-red-300','outline-green-300')
  document.querySelector('#textEmail').classList.replace('focus:outline-red-300','focus:outline-green-300')
}
else {
  document.querySelector('#textEmail').classList.replace('outline-green-300','outline-red-300')
  document.querySelector('#textEmail').classList.replace('outline-slate-200','outline-red-300')
  document.querySelector('#textEmail').classList.replace('focus:outline-green-300','focus:outline-red-300')
}
}


function onChangeTextArea(e) {
 
// console.log(e.target.value)
if (e.target.value.length!==0){
  document.querySelector('#textArea').classList.replace('outline-slate-200','outline-green-300')
  document.querySelector('#textArea').classList.replace('outline-red-300','outline-green-300')
  document.querySelector('#textArea').classList.replace('focus:outline-red-300','focus:outline-green-300')
}
else{
  document.querySelector('#textArea').classList.replace('outline-green-300','outline-red-300')
  document.querySelector('#textArea').classList.replace('focus:outline-green-300','focus:outline-red-300')
}


}

async function getData(e){

  const userName=document.querySelector('#textName').value
  const email=document.querySelector('#textEmail').value
  const phone=document.querySelector('#phoneNumber').value
  const message=document.querySelector('#textArea').value


  let isMobilePhone=validator.isMobilePhone(document.querySelector('#phoneNumber').value)
  let isEmail=validator.isEmail(document.querySelector('#textEmail').value)
  let textName= document.querySelector('#textName').value.length!==0 ? true : false
  let textArea= document.querySelector('#textArea').value.length!==0 ? true : false
  
  if(isMobilePhone && isEmail && textArea && textName){

    let date=new Date(Date.now())
    const str=`${date}`
    console.log(str)
  
    console.log(`${userName}\n${phone}\n${email}\n${message}`)
  
    fetch("/api/sms?key=xwlGENHTiaTycCQQHgXVcf57M34ZWD1R",{
      method:'POST',
      body:`${userName}\n${phone}\n${email}\n${message}`
      // body:JSON.stringify({name:`${userName}`,phone:`${phone}`,email:`${email}`,message:`${message}`})
    }).then(response=>{
      response.json().then(res=>console.log(res))
    })
    
     document.querySelector('#btn_close').click()
  
  }
  else{

    if(document.querySelector('#textName').value.length==0){
      document.querySelector('#textName').classList.add('outline-red-300')
    }
    if(!textArea){
      document.querySelector('#textArea').classList.add('outline-red-300')
    }

    if(!validator.isEmail(document.querySelector('#textEmail').value)){
      document.querySelector('#textEmail').classList.add('outline-red-300')
    }
    if(!isMobilePhone){
      document.querySelector('#phoneNumber').classList.add('outline-red-300')
    }


  }

  }

 






const PopUpForm=()=>{


return (
       
<div className=" hidden fixed top-0 text-dark z-20 w-full h-full flex flex-col justify-center items-center bg-gray-900 bg-opacity-90" id="QuoteModal"  >
  <div className="w-[90%] md:w-[50%]">
    <div className="mt-5 flex flex-col justify-center items-center w-full"  style={{backgroundColor:"rgba(255,255,255, 0.90)",borderRadius:"15px"}}>
      <div className="flex flex-row  w-full justify-between pb-10 pt-2 ">
            <h1></h1>
            <h5 className="-pr-5" style={{fontFamily:"open sans",fontSize:"30px"}}>Get quote</h5>
            <button id="btn_close" className="text-gray-500 hover:text-gray-600 pr-5  text-3xl"  onClick={()=>{
                document.getElementById("QuoteModal").classList.add("hidden")
                document.getElementById("roadside").classList.remove("overflow-hidden")
                }}>
                <span>&times;</span>
            </button>
            
      </div>
      <div className="w-full flex flex-col justify-center items-center ">
            <form className='w-full text-center'>
                <div className="">
                    <label for="name"></label>
                    <input id="textName" onChange={onChangeTextName} type="text" className="w-[90%] m-2 rounded-md p-3 text-gray-600 outline outline-slate-200 focus:outline-red-300 focus:outline-2" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label for="Phone Number"></label>
                    <input id="phoneNumber" onChange={onChangePhoneNumber} type="tel" className="w-[90%] m-2 p-3 rounded-md text-gray-600 outline outline-slate-200 focus:outline-red-300 focus:outline-2" placeholder="Phone Number"/>
                </div>
                <div className="form-group">
                    <label for="email"></label>
                    <input id="textEmail" onChange={onChangeEmail} type="email" className="w-[90%] m-2 p-3 rounded-md text-gray-600 outline outline-slate-200 focus:outline-red-300 focus:outline-2" placeholder="Email"/>
                </div>
                <div className="flex flex-col justify-center  items-center">
                    <label  for="message" className="m-2 text-gray-600">How can we help you?</label>
                    <textarea  id="textArea" onChange={onChangeTextArea} className="w-[90%] m-2 outline outline-slate-200 focus:outline-red-300 focus:outline-2" placeholder="I was wondering about availability and rates. I need help with the following:"></textarea>
                </div>
            </form>
      </div>
      <div className="pb-7 pt-5 ">
        <button onClick={getData} type="submit" id="submit-btn" className=" text-white rounded-md p-2" style={{backgroundColor:"#6366F1",width:"150px"}}>Submit</button>
      </div>
    </div>
  </div>
</div>
    )
}

export default PopUpForm;