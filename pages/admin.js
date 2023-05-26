
import { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import ImageUploadComponent from '../components/ImageUpload';
import ImagesPage from "../components/ImagesList"
import { useRouter } from 'next/router';
import Navbar from "../components/LoginNavbar"



export default function Admin(){

    const router = useRouter();
    const handleRefresh = () => {
      router.replace(router.asPath);
    };

    const [countAdmin, setCountAdmin] = useState(0);
    console.log("//// count admin page //////",countAdmin)
    const { user, error, isLoading } = useUser();
    console.log("&&&&&&&&&&&& login status &&&&&&&&&&&&&\n",user,error,isLoading)
 
 
    return(
    <div className="flex flex-col justify-center items-center space-y-5">
        
        <Navbar user={user}/>
        {user ? <ImageUploadComponent count={countAdmin} setCount={setCountAdmin}/> : null }
        {user ? <ImagesPage handleRefresh={handleRefresh} countAdmin={countAdmin} setCountAdmin={setCountAdmin}/> : null}
{/* 
        <ImageUploadComponent count={countAdmin} setCount={setCountAdmin}/>
        <ImagesPage handleRefresh={handleRefresh} countAdmin={countAdmin} setCountAdmin={setCountAdmin}/>  */}

    </div>
 )
}