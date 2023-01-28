

import { useContext,useState } from 'react';
import Head from 'next/head'
import Script from 'next/script'
import {Modal,Button,HiOutlineExclamationCircle} from 'flowbite-react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Context from "../components/ContextFile";






export default function PopUpQ({visible,setVisible}){


const {mainState,dispatch}=useContext(Context)
const onClose=()=>{
        setVisible(false)
    }

    return(
   
    <>
        
        <Head>
            <script  defer src="/scripts/initMap.js"></script>
            <script defer type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJdqzicSsMRPrMk_OVUoQDaMPeNBi-aU&libraries=places&callback=initMap"></script>
        </Head>
        <Script src="/scripts/initMap.js"></Script>
        <Modal className='h-full  pt-5'
        show={visible}
        size="2xl"
        popup={true}
        position="top-center"
        onClose={onClose}
    >
      
        <Modal.Header/>
        <Modal.Body>


        {mainState.steps==1 ? <Step1/> : null}
        {mainState.steps==2 ? <Step2/> : null}
        {mainState.steps==3 ? <Step3/> : null}
        {mainState.steps==4 ? <Step4/> : null}
        
      
       
       
        </Modal.Body>
      
        </Modal>
    </>


  
    )
}