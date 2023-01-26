
import { useState } from "react"
import validator from 'validator'




const mouseClick=function(e){
   
    console.log("//// clicked ////", e.target.dataset.rating)

    let elms=document.getElementById("stars").getElementsByTagName('svg')

    for(let i=0;i<parseInt(e.target.dataset.rating);i++){
        // console.log(elms[i].dataset)
        elms[i].classList.replace('text-gray-300','text-yellow-400')
        
    }

    for(let i=parseInt(e.target.dataset.rating);i<elms.length;i++){
        // console.log(elms[i].dataset)
        elms[i].classList.replace('text-yellow-400','text-gray-300')
        
    }
        
}


const windowOnClick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

export default function Review(){

   const [state,setState]=useState({name:"",email:"",text:""})
   
    return(

        <div id="myModal" className="fixed hidden  z-10 pt-[100px] left-0 top-0 w-[100%] h-[100%] overflow-auto bg-[#000000dd]" onClick={windowOnClick}>

      
        <div className="bg-[#ffffffe6] mx-auto p-[20px] border-1 border-[#888] w-[80%] rounded-xl ">
            <span className="text-[#aaaaaa] float-right font-bold text-2xl hover:text-black hover:cursor-pointer" onClick={()=>{

                let modal = document.getElementById("myModal");
                modal.classList.add("hidden")
                modal.style.display = "none";
                  
            }}>&times;</span>
            {/* modal content */}
           <div>
                <div id="stars" className="w-full flex items-center justify-center pb-5">
                        <div className="flex items-center">
                            <svg aria-hidden="true" data-rating="1" className="w-10 h-10 text-gray-300 hover:cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  onClick={mouseClick}><title></title><path data-rating="1" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" data-rating="2" className="w-10 h-10 text-gray-300 hover:cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  onClick={mouseClick}><title></title><path data-rating="2" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" data-rating="3" className="w-10 h-10 text-gray-300 hover:cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  onClick={mouseClick}><title></title><path data-rating="3" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" data-rating="4" className="w-10 h-10 text-gray-300 hover:cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  onClick={mouseClick}><title></title><path data-rating="4"d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" data-rating="5" className="w-10 h-10 text-gray-300 hover:cursor-pointer dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onClick={mouseClick}><title>Fifth star</title><path data-rating="5" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center">
                    <form className="w-full flex flex-col items-center justify-center space-y-3">
                    
                    <input className="w-[90%] p-2 outline-slate-200 outline focus:outline-red-300 focus:outline-2" type="text" id="review_name" name="name"  placeholder="Name" onChange={(e)=>{
                        // console.log(e.target.value)
                        setState({...state,name:e.target.value})
                        if (e.target.value.length!==0){
                            document.querySelector('#review_name').classList.replace('outline-slate-200','outline-green-300')
                            document.querySelector('#review_name').classList.replace('outline-red-300','outline-green-300')
                            document.querySelector('#review_name').classList.replace('focus:outline-red-300','focus:outline-green-300')
                          }
                          else{
                            document.querySelector('#review_name').classList.replace('outline-green-300','outline-red-300')
                            document.querySelector('#review_name').classList.replace('focus:outline-green-300','focus:outline-red-300')
                          }
                    }} />
                    <input className="w-[90%] p-2 outline-slate-200 outline focus:outline-red-300 focus:outline-2" type="text" id="review_email" name="email" placeholder="email"  onChange={(e)=>{
                        // console.log(e.target.value)
                        setState({...state,email:e.target.value})
                        if (validator.isEmail(e.target.value)){
                            document.querySelector('#review_email').classList.replace('outline-slate-200','outline-green-300')
                            document.querySelector('#review_email').classList.replace('outline-red-300','outline-green-300')
                            document.querySelector('#review_email').classList.replace('focus:outline-red-300','focus:outline-green-300')
                          }
                          else {
                            document.querySelector('#review_email').classList.replace('outline-green-300','outline-red-300')
                            document.querySelector('#review_email').classList.replace('outline-slate-200','outline-red-300')
                            document.querySelector('#review_email').classList.replace('focus:outline-green-300','focus:outline-red-300')
                          }
                    }} />
                    <textarea  id="review_textArea"  className="w-[90%] p-2 outline-slate-200 outline focus:outline-red-300 focus:outline-2" placeholder="Enter your review here" onChange={(e)=>{
                        // console.log(e.target.value)
                        setState({...state,text:e.target.value})
                        if (e.target.value.length!==0){
                            document.querySelector('#review_textArea').classList.replace('outline-slate-200','outline-green-300')
                            document.querySelector('#review_textArea').classList.replace('outline-red-300','outline-green-300')
                            document.querySelector('#review_textArea').classList.replace('focus:outline-red-300','focus:outline-green-300')
                          }
                          else {
                            document.querySelector('#review_textArea').classList.replace('outline-green-300','outline-red-300')
                            document.querySelector('#review_textArea').classList.replace('outline-slate-200','outline-red-300')
                            document.querySelector('#review_textArea').classList.replace('focus:outline-green-300','focus:outline-red-300')
                          }
                    }} ></textarea>

                   <div className="pt-5 pb-4">
                    <div  className="cursor-pointer border-2 border-slate-400 p-2 rounded-md text-white bg-[#6366F1] w-[150px] text-center" onClick={(e)=>{
                                    e.preventDefault()
                                    let modal = document.getElementById("myModal");
                                    let isName=document.querySelector('#review_name').value.length!==0 ? true : false
                                    let isTextArea=document.querySelector('#review_textArea').value.length!==0 ? true : false
                                    if(isName && isTextArea){
                                        modal.style.display = "none";
                                    console.log("//// Submit clicked /////",state)
                                    // update_sqlite(state.name,state.email,state.text,"5")
                                    setState({name:"",email:"",text:""})
                                    document.getElementById("review_name").value=""
                                    document.getElementById("review_email").value=""
                                    document.getElementById("review_textArea").value=""
                                    fetch('/api/addrec',{
                                        method:'POST',
                                        body:JSON.stringify(state)
                                    }).then(response=>{
                                        response.json().then(res=>console.log(res))
                                    }).catch(e=>console.log("//// error /////\n",e))

                                    }
                                    else{
                                        if(document.querySelector('#review_name').value.length==0){
                                            document.querySelector('#review_name').classList.add('outline-red-300')
                                          }
                                          if(!isTextArea){
                                            document.querySelector('#review_textArea').classList.add('outline-red-300')
                                          }
                                      
                                          if(!validator.isEmail(document.querySelector('#review_email').value)){
                                            document.querySelector('#review_email').classList.add('outline-red-300')
                                          }
                                    }
                                    
                                }}>
                            <h1>Submit</h1>
                    </div>
                   </div>
                
                    </form> 
                </div>

                
           </div>
            
        </div>

</div>
        

      

    )
}