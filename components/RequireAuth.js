
import { useEffect } from 'react';

const RequireAuth=(props)=>{
 
   
    useEffect(()=>{
        if (!props.id){
       
            props.router.push("/")
            
        }
        
        
    },[props.id])

    if(props.id){
        return (
            <>
            {props.children}
            </>
        )
    }
    else{
        // return (
        //     <h2>Loading....</h2>
        // )
    }
   
    
}

export default RequireAuth