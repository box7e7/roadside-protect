import React from 'react';
import Image from 'next/image';
import fs from 'fs'
import path from 'path';

const ImagesPage = ({ imageList }) => {
  const handleDelete = async (fileName) => {
    // Implement your file deletion logic here
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Images</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 pb-20  ">
        {imageList.map((fileName) => (
            <div key={fileName} className="flex flex-col items-center justify-between   ">
                <Image
                src={`/gallery/${fileName}`}
                alt={fileName}
                
                
                width="500"
                height="500"
                className="rounded-xl w-96 h-72"
                />
                <button
                    onClick={() => handleDelete(fileName)}
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

export async function getServerSideProps() {
  const imagesPath = path.join(process.cwd(), '/public/gallery');
  const files = await fs.promises.readdir(imagesPath);

  return {
    props: {
      imageList: files,
    },
  };
}

export default ImagesPage;






