// Backend
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

// export default async (req, res) => {
export default withApiAuthRequired(async function handler(req, res) {

    let { accessToken } = await getAccessToken(req, res);
    var decoded = jwt_decode(accessToken);
    console.log("///// jwt headers upPics.js //////",jwt_decode(accessToken, { header: true }))
    // console.log("///// access token upPics.js //////",accessToken)

    let add_images=false
    _.includes(decoded.permissions, 'add:files') ? add_images=true : null
    console.log("///// decoded permission upPics.js //////", decoded.permissions,add_images)


    if(add_images){
        const form = new formidable.IncomingForm();
        form.uploadDir = "/tmp";
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {

        if (err) {
            reject(err);
            res.sendStatus(500);
            return;
            // console.log("////// err upload.js /////", err)
        }
        else{
            console.log("////// files upPics.js ///////",files)
        Object.keys(files).forEach(image=>{
            console.log(files[image].originalFilename,files[image]. newFilename)
            
            const oldPath = `/tmp/${files[image].newFilename}`;
            const uniqueFileName = `${files[image].originalFilename}`;
            const newPath = path.join(process.cwd(), `/public/gallery/${uniqueFileName}`)

            console.log(files[image].originalFilename,files[image].newFilename,oldPath,newPath)
    
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

            res.status(200).json({ status: 'File copied successfully!'});
            // console.log("///// upPics //////",err, fields, files);
            
            
        });
    }
    else{
        res.status(403).json({ status: "Not allowed" });
    }
    
});