// import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs";
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import jwt_decode from "jwt-decode";
import _, { add } from 'lodash'


export const config = {
  api: {
    bodyParser: false,
  },
};


const options= {}
options.maxFileSize = 4000 * 1024 * 1024;
// options.uploadDir = path.join(process.cwd(), "/public/gallery")



// export default async function handler(req, res) {
  export default withApiAuthRequired(async function handler(req, res) {


    let { accessToken } = await getAccessToken(req, res);
    var decoded = jwt_decode(accessToken);
    console.log(jwt_decode(accessToken, { header: true }))
    
    // console.log("///// access token //////",accessToken)

    let add_images=false
    _.includes(decoded.permissions, 'add:files') ? add_images=true : null
    console.log("///// decoded permission upload.js //////",decoded.permissions,add_images)


   if(add_images){
    try {
      const form = formidable(options);
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
          res.status(400).json({ status: err });

        }
        else{
            // console.log({ fields, files })
              // Access the uploaded file using fields and files objects
            const { image } = files;
            // Process the file as needed
            // You can access the file properties like image.name, image.type, image.filepath, etc.
          
            Object.keys(files).forEach(image=>{
              console.log(files[image].originalFilename,files[image].filepath)
              
              const oldPath = `${files[image].filepath}`;
              const uniqueFileName = `${files[image].originalFilename}`;
              const newPath = path.join(process.cwd(), `/public/gallery/${uniqueFileName}`)

              console.log(files[image].originalFilename,files[image].filepath,oldPath,newPath)
        
              // Move the file from temporary location to the desired directory
              fs.copyFile(oldPath, newPath, (err) => {
                if (err) {
                  console.error('Error copying file:', err);
                } else {
                  console.log('File copied successfully!');
                }
              });
            })
        }
        
      });
  
     
  
      
  
      res.status(200).json({ message: 'File uploaded successfully!' });
    
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ error: error });
    }
  
   }
   else{
    res.status(403).json({ status: "Not allowed" });
   }
})
  
