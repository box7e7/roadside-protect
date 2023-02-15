
import { getDistance } from "../../scripts/distance"

export default async function handler (req, res) {


    if (req.query.source && req.query.destination){

        const distance=await getDistance(req.query.source,req.query.destination)
        console.log(`distane in miles ${distance}`)
        if(distance.distance){
            res.status(200).json({ distance: distance.distance })
        }
        else if(distance.error){
            res.status(200).json({ error: distance.error })
        }
        else{
            res.status(200).json({ error: "undifined errors please check logs" })
        }

    
  }
  else{
    res.status(200).json({ status:"missing parameters"})
  }
}
  