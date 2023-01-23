import {Link} from 'react-scroll'

function navigate(e){
    
    
  let element=e.target.attributes[0].nodeValue;
  console.log(element);
  // console.log(e.target.attributes);
  e.preventDefault();
  document.querySelector(element).scrollIntoView({behavior:'smooth'})
}



export default function Navbar(){

    return(
        <div id="navbar" className="bg-gray-800  sticky z-10 top-0 w-[100%]">

          <div className="hidden md:flex md:flex-row justify-center items-center pt-5">
            <a  href="tel:281-602-8213" className="white-100 text-white font-sans text-[17px] font-bold">1-281-602-8213</a>
            <a  href="tel:281-602-8213" className=" bg-[#6366F1] p-2 rounded-lg ml-2 w-32 text-slate-100 hover:bg-[#585af1] text-center hover:cursor-pointer">Call now</a>
          </div>

          <div className="mx-auto  px-2 sm:px-6 lg:px-8 w-full pb-3">
            <div className="relative flex h-16 items-center justify-between w-full pt-3">
              
              {/* ############# Sandwitch Button ############
                  ##########################################*/}
              
              <div className=" inset-y-0 left-0 flex items-center md:hidden">
                    
                    <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={(event)=>{
                        let elm=document.getElementsByTagName('svg')
                        let mobileMenu=document.getElementById('mobile-menu')
                        console.log()
                        if (elm[0].classList.value.includes("hidden")){
                          elm[0].classList.remove('hidden')
                          elm[0].classList.add('block')
                          elm[1].classList.remove('block')
                          elm[1].classList.add('hidden')
                          mobileMenu.classList.add('hidden')
                          mobileMenu.classList.remove('block')
                        }
                        else{

                          elm[0].classList.remove('block')
                          elm[0].classList.add('hidden')
                          elm[1].classList.remove('hidden')
                          elm[1].classList.add('block')
                          mobileMenu.classList.add('block')
                          mobileMenu.classList.remove('hidden')

                        }
                      
                    }}>
                      <span className="sr-only">Open main menu</span>
                    
                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" onClick={(event)=>{
                          // console.log(event.target)
                      }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    
                      <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
              </div>

          
           

              {/* ############ Sandwitch Button ############ */}


              
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">

               
               
                <div className="flex flex-shrink-0 items-center left-0 right-0  ">
                  <img className="block h-16 w-auto lg:hidden ml-12" src="/logo_momentum.png" alt="Your Company"/>
                  <img className="hidden h-20 w-auto lg:block" src="/logo_momentum.png" alt="Your Company"/>
                </div>

                

                <div className="hidden sm:ml-6 md:block">
                  <div className="flex pt-3 space-x-4">
                    
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-130} duration={500} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page" >Home</Link>

                    <Link activeClass="active" to="services" spy={true} smooth={true} offset={-185} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>

                    <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-95} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>

                    <Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={-200} duration={500}  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">Testimonials</Link>
                    
                    <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={navigate}>About</a>
                 
                  </div>
                </div>
              </div>

              <div className="md:hidden  flex flex-row justify-center items-center pt-5 left-0 pb-5">
                {/* <h1 className="white-100 text-white font-sans text-[13px] font-bold">1-713-542-4467</h1> */}
                <a  href="tel:2816028213" className=" bg-[#6366F1] p-2 rounded-lg ml-2 w-24 text-[14px] text-slate-100 hover:bg-[#585af1] text-center hover:cursor-pointer mr-2">Call now</a>
              </div>
          
            </div>
              
          </div>

          
          <div className="md:hidden hidden overflow-hidden absolute top-16 w-full bg-gray-800" id="mobile-menu">
            
            <div className="space-y-1 px-2 pt-2 pb-3">
            
              <Link activeClass="active" to="home" spy={true} smooth={true} offset={-130} duration={500} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page" >Home</Link>

              <Link activeClass="active" to="services" spy={true} smooth={true} offset={-150} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >Services</Link>

              <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-75} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Gallery</Link>

              <Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={-200} duration={500}  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >Testimonials</Link>
            
              <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={navigate}>About</a>
            </div>

          </div>
        </div>
    )
}
