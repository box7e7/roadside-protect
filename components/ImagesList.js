import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import MyComponent from '../components/CounterComponent';



const ImagesPage = ({handleRefresh,countAdmin,setCountAdmin }) => {

  const protocol = window.location.protocol;
  const host = window.location.host;
  const fullHost = protocol + '//' + host;
  console.log(fullHost)
  
   
  
  const [selectedImage,setSelectedImage]=useState([])
  const [count, setCount] = useState(0);
  const [imageList,setImageList]=useState([])
  const [permitted,setPermitted]=useState(false)

  console.log("////// count admin from ImageList compenent ///////",countAdmin)
  useEffect(()=>{
    setCount(count+1)
    setCountAdmin(0)
  },[countAdmin])

    useEffect(()=>{
        const func1=async()=>{
            const response=await fetch(`${fullHost}/api/imageAPI?ops=list`).then(res=>{
                return res.json()
            })
            console.log("//// response ///////\n",response)
            
            response.files ? setImageList(response.files) : null
            response.files ? setPermitted(true) : null
        
        }

        func1()
    },[count])


  useEffect(()=>{
    console.log("//// number Selected Images useEffect /////\n",count)
  },[count])


  const handleDelete = async () => {
    // Implement your file deletion logic here
    // handleRefresh()

    const protocol = window.location.protocol;
    const host = window.location.host;
    const fullHost = protocol + '//' + host;
    console.log(fullHost);

    if(selectedImage.length!=0){
        fetch(`${fullHost}/api/imageAPI?ops=delete`,{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(selectedImage)
    }).then(res=>{
        res.json().then(response=>{
            console.log(response)
            setSelectedImage([])
            setCount(0)

        })
    })

    }
  };

  
  console.log("//// selected images /////\n",selectedImage)

  const selectImage=(e)=>{
    // console.log(e.target.alt)
    
    let arr0=selectedImage
    arr0.push(e.target.alt)
    console.log("///// arr0 ////",arr0,selectedImage)
    const topPosition = window.scrollY;
    const leftPosition = window.scrollX;
   
    // setScrollXY({top:topPosition,left:leftPosition})
    setCount(count+1)
    setSelectedImage(arr0)
    // handleRefresh()
    }

 

  return (
    <div className="container mx-auto px-4 flex flex-col justify-center items-center pt-0">
        
      {permitted ? <h1 className="text-2xl font-bold mb-4 text-slate-700">Gallery</h1> : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 pb-20  ">
        {imageList.map((fileName) => (
            <div id={fileName} key={fileName} className="flex flex-col items-center justify-between">
                <div className='relative'>
                    <Image
                    // src={`/gallery/${fileName}`}
                    src={`${fullHost}/api/serveFile?fileName=${fileName}`}
                    alt={fileName}
                    width="500"
                    height="500"
                    className="rounded-xl w-96 h-72 hover:cursor-pointer"
                    onClick={selectImage}
                    />
                    { selectedImage.includes(fileName) ? <div className="absolute inset-0 bg-gray-500 opacity-50 hover:cursor-pointer" onClick={(e)=>{
                       
                
                        const index = selectedImage.indexOf(fileName);
                        selectedImage.splice(index, 1);
                        
                        const topPosition = window.scrollY;
                        const leftPosition = window.scrollX;
                    
                        // setScrollXY({top:topPosition,left:leftPosition})
                        setCount(count-1)
                        // handleRefresh()
                    }}></div> : null}
                </div>
                <button
                    onClick={() => handleDelete()}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                >
                Delete
                </button>
          </div>
        ))}
      </div>
    </div>
  );
};



export default ImagesPage;