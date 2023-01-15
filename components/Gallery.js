import Image from 'next/image'


export default function Gallery(){

    let arr1=[1,2,3,4,5,6,7,8,9,10,11,12]

    return(
      
        <div  id="gallery" className={`relative top-[340px] bg-gray-800  flex flex-cols justify-center items-center pb-10`}>
            
            <div className="" style={{paddingTop:"100px"}}>
                <div className="flex flex-col justify-center items-center pb-10">
                    <div className="" style={{width:"40px",borderTop: "3px white solid"}}></div>
                    <div className="mt-3" style={{color: "white", fontFamily: "libre baskerville", fontWeight:"lighter", fontSize: "26px"}}>Gallery </div>
                </div>

              
               
                <div class="grid grid-cols-2 md:grid-cols-4">

                    { 
                    arr1.map(item=>{
                            return(
                                
    <                               div key={item} class="m-4">
                                        <Image src={`/gallery/IMG_${item}.JPG`} width="800" height="800" class="rounded-lg w-56 h-56" alt=""/>
                                    </div>
                            
                            )
                        })
                    }

                </div>
               
               



              
                
            </div>
        </div>
        
    )
}