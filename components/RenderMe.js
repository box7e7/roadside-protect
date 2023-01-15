var { randomBytes } = require('crypto');

const func= async()=>{
    let body
    let database="payment"
    let collection="cards"
    let query='{"charged":"false","errors":{"$exists":1},"updated":{"$regex":"nov","$options":"-i"}}'
    let key="iiHwyfGGa2V1dREMCtX4rpex3MkprZik"
    let ops='read'
    const response=await fetch(`https://alexa.mehdi.cloud:7002/api?ops=${ops}&key=${key}&database=${database}&collection=${collection}&q=${query}`)
    let data=await response.json()
    return data
  }

  export async function getServerSideProps(){

    let data=await func()
    return { 
           props:{
            data:data,
           
          }}
  
      }

const RenderMe0=({data})=>{

return(
    <div>
        {data.map((item)=>{
        return(
          <h1 key={randomBytes(2).toString('base64')}>{item['REF#']}</h1>
        )
      })}
    </div>
)

}


export default RenderMe0;