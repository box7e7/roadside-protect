import { useState } from 'react';
import axios from 'axios';

const ImageUploadComponent = ({count,setCount}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    const fileList = event.target.files; // List of selected files
    const fileListContainer = document.getElementById('file-list');

    fileListContainer.innerHTML = ''; // Clear the file list container

    for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    const listItem = document.createElement('div');
    listItem.textContent = file.name;
    fileListContainer.appendChild(listItem);
    }
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fileListContainer = document.getElementById('file-list');
    fileListContainer.innerHTML = ''; // Clear the file list container
    setSelectedFiles([])


    try {
      const formData = new FormData();
      selectedFiles.forEach((file, index) => {
        formData.append(`image${index}`, file);
      });
      const protocol = window.location.protocol;
      const host = window.location.host;
      const fullHost = protocol + '//' + host;
      console.log(fullHost)

      await axios.post(`${fullHost}/api/upPics`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Files uploaded successfully!');
      setCount(count+1)
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5 items-center pt-10" >
       <div className='flex flex-col w-96 items-center '>
        <label htmlFor="fileInput" className="inline-block bg-blue-500 text-white px-4 py-3 rounded-md cursor-pointer w-36 h-12 text-center">
          Choose Files
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        <div id="file-list"></div>
       </div>
      {selectedFiles.length!=0 ? <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-24 h-12">Upload</button> : null}
    </form>
  );
};

export default ImageUploadComponent;
