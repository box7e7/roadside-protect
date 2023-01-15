import { PrismaClient } from '@prisma/client'
import Navbar from "../components/Navbar"
import MainHome from "../components/MainHome"
import Service from "../components/Services"
import Gallery from "../components/Gallery"
// import Testimonials from "../components/Testimonials"
import TestimonialsPages from '../components/TestimonialsPages'
import About from "../components/About"
import Review from '../components/Reviews'





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

    // console.log(data)

    return(
        <div id="roadside" className="h-full">
            <Navbar/>
            <MainHome/>
            <Service/>
            <Gallery/>
            {/* <Testimonials data={data}/> */}
            <TestimonialsPages data={data}/>
            <About/>
            <Review/>
        </div>
       
    )
}