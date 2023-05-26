import { useEffect } from "react";

function validateForm() {
    // Clear previous error messages
    document.getElementById("phone-error").textContent = "";
    document.getElementById("email-error").textContent = "";

    // Get the values from the form
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // Regular expressions for phone number and email validation
    var phoneRegex = /^[0-9]{10}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate phone number
    if (!phoneRegex.test(phone)) {
      document.getElementById("phone-error").textContent = "Invalid phone number";
      return false;
    }

    // Validate email
    if (!emailRegex.test(email)) {
      document.getElementById("email-error").textContent = "Invalid email address";
      return false;
    }

    // Form is valid, continue with submission
    return true;
  }


  async function getData(e){

    const first_name=document.querySelector("#first_name").value
    const last_name =document.querySelector("#last_name").value
    const phone=document.querySelector("#phone").value
    const email=document.querySelector("#email").value
    const address=document.querySelector("#address").value
    // const message=document.querySelector('#textArea').value

    console.log(first_name,last_name,phone,email,address)

  }
 

export default function JoinUs(){

    useEffect(()=>{
         // Add event listener to the form submit button
  var submitButton = document.querySelector("button[type=\'submit\']");
  submitButton.addEventListener("click", function(event){
    event.preventDefault(); // Prevent form submission
    if (validateForm()) {
      // Form is valid, submit it
      // Add your submission logic here
      console.log("Form submitted successfully");
    }
  });

    },[])
    return(
        <div className="w-full  flex flex-col justify-center items-center bg-white mt-[25px] top-10">
            <div className="flex flex-col flex-shrink-0 justify-center items-center left-0 right-0 bg-gray-500 mb-5 w-[90%] md:w-[40%] rounded-lg shadow-2xl ">
                  <img className=" h-20 w-auto block my-5" src="/logo_momentum.png" alt="Your Company"/>
                  <h1 className=" text-xl md:text-3xl text-slate-100 font-semibold pb-1">Join Our Provider Network</h1>
                  <h1 className="text-slate-100 font-normal pb-10 text-xs md:text-sm text-center w-[80%]">Maximize your roadside business&apos;s revenue effortlessly with our pain-free system! <br/> Leave the complexities to us while you concentrate on your core expertise!</h1>
                </div>
            <div className="bg-gray-500 p-8  w-[90%] md:w-[40%] rounded-lg shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label for="first_name" className="text-gray-300 text-xs">FIRST NAME</label>
                        <input type="text" id="first_name" name="first_name"  className=" bg-slate-200 w-full border-gray-300 rounded-md p-2 outline-slate-200 focus:outline-red-300 focus:outline-2 " placeholder=""/>
                    </div>
                    <div>
                        <label for="last_name" className="text-gray-300 text-xs">LAST NAME</label>
                        <input type="text" id="last_name" name="last_name"  className=" bg-slate-200 w-full border-gray-300 rounded-md p-2 outline-slate-200 focus:outline-red-300 focus:outline-2" placeholder=""/>
                    </div>
                    <div className="col-span-2">
                        <label for="job_title" className="text-gray-300 text-xs">JOB TITLE</label>
                        <input type="text" id="job_title" name="job_title" className="bg-slate-200 w-full border-gray-300 rounded-md p-2 outline-slate-200 focus:outline-red-300 focus:outline-2" placeholder=""/>
                    </div>
                    <div className="col-span-2">
                        <label for="phone" className="text-gray-300 text-xs">PHONE NUMBER</label>
                        <input type="text" id="phone" name="phone" className="bg-slate-200 w-full border-gray-300 rounded-md p-2 outline-slate-200 focus:outline-red-300 focus:outline-2" placeholder=""/>
                        <span id="phone-error" className="text-red-700 text-xs"></span>
                    </div>
                    <div className="col-span-2">
                        <label for="email" className="text-gray-300 text-xs">EMAIL</label>
                        <input type="email" id="email" name="email" className=" bg-slate-200 w-full border-gray-300 rounded-md p-2 outline-slate-200 focus:outline-red-300 focus:outline-2" placeholder=""/>
                        <span id="email-error" className="text-red-700 text-xs"></span>
                    </div>
                    <div className="col-span-2">
                        <label for="address" className="text-gray-300 text-xs">ADDRESS</label>
                        <textarea id="address" name="address" className="bg-slate-200 w-full border-gray-300 rounded-md p-2 outline-slate-200 focus:outline-red-300 focus:outline-2" placeholder=""></textarea>
                    </div>
                    {/* <div class="col-span-2">
                        <label for="file" class="text-gray-300 text-xs">UPLOAD FILE</label>
                        <input type="file" id="file" name="file" accept=".txt,.pdf,.docx" class="w-full border-gray-300 rounded-md p-2 outline-slate-200 focus:outline-red-300 focus:outline-2" />
                        <span id="file-error" class="text-red-500 text-xs"></span>
                    </div> */}
                    <div className="col-span-2 flex justify-center py-5">
                        <button type="submit" onClick={getData} className="bg-blue-500 text-white rounded-md px-4 py-4 my-8 w-[100%]">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}