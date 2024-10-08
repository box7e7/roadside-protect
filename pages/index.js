import { PrismaClient } from '@prisma/client'
import Navbar from "../components/Navbar"
import MainHome from "../components/MainHome"
import Service from "../components/website/Services"
// import Service from "../components/Services"
import Gallery from "../components/Gallery"
// import Testimonials from "../components/Testimonials"
import TestimonialsPages from '../components/TestimonialsPages'
import Gallery0 from '../components/Gallery0'
import About from "../components/About"
import Review from '../components/Reviews'
import Chatbot from '../components/ChatBot'
// import { useUser } from '@auth0/nextjs-auth0/client';






// async function update_sqlite(prisma) {
//   const review = await prisma.reviews.create({
//     data: {
//       name: "Saima M",
//       post:"Amazing service in a timely manner! The guy was at my location within 20 minutes of me calling and completed the job within 10 minutes. Definitely recommend!",
//       date:Date(),
//       email:"",
//       rate:""

//     },
//   })
//   console.log("//// Sqlite3 reviews /////\n",review)
// }


async function find_records(prisma) {
    const users = await prisma.reviews.findMany()
    console.log(users)
    return users
   }
  
  
  export async function getServerSideProps(){
  
    const prisma = new PrismaClient()
    return find_records(prisma)
    .then(async (res) => {
    //   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n",res)
      await prisma.$disconnect()
      return{
        props:{
            data:res
        }
    }
      
    

    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()

      return{
        props:{
            data:[]
        }
    }

     
    })
  
     
  }



export default function roadside({data}){

  // const { user, error, isLoading } = useUser();
  //   console.log("&&&&&&&&&&&&&&&&&&&&&&&\n",user,error,isLoading)

    return(
        <div id="roadside" className="h-full">
          
            <Navbar/>
            <MainHome/>
            <Service/>
            <Gallery0 data={data}/>
            {/* <Gallery/> */}
            {/* <Testimonials data={data}/> */}
            <TestimonialsPages data={data}/>
            <About/>
            <Review/>
            {/* <Chatbot/> */}
            
        </div>
       
    )
}