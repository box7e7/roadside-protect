import { useEffect,useState } from "react";


export default function IsAuthenticated(props){


   
    const [isLogged,setIsLogged]=useState(null)
    
    useEffect(()=>{


        fetch('/api/auth0').then(res => {
            if (res.status === 200) {
                console.log("/////// status////////\n",res.status)
                setIsLogged(true)
                props.router.push("/dashboard")
                
            }
            else {
                setIsLogged(false)
            }
        })
    },[])


    console.log("/////// props from isAuth ////////\n",props,isLogged)

if(props.clickedFroAuth){
    return(
        <h1>Processing....</h1>
    )
}
else{
    if(isLogged===null){
        return(
            <h1>Processing....</h1>
        )
}
else if(!isLogged){
return(
    <>
    {props.children}
    </>
)
}
}



}