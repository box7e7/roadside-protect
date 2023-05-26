
import fs from 'fs'
import path from 'path';
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import jwt_decode from "jwt-decode";
import _ from 'lodash'


// export default async function handler(req, res) {
    export default withApiAuthRequired(async function handler(req, res) {

    let { accessToken } = await getAccessToken(req, res);
    var decoded = jwt_decode(accessToken);
    console.log(jwt_decode(accessToken, { header: true }))
    console.log("///// decoded permission imageAPI.js //////",decoded.permissions)
    // console.log("///// access token //////",accessToken)

    let list_images=false
    let delete_images=false

    _.includes(decoded.permissions, 'list:files') ? list_images=true : null
    _.includes(decoded.permissions, 'delete:files') ? delete_images=true : null

    if(req.query.ops=='list' && list_images){
        const imagesPath = path.join(process.cwd(), '/public/gallery');
        const files = await fs.promises.readdir(imagesPath);
        console.log(req.query.ops)
        
        res.status(200).json({ files: files })
    }
    else if(req.query.ops=='delete' && delete_images){
        const galleryFolder = path.join(process.cwd(), 'public/gallery');
        console.log("///// body ////// ",req.body)
        
        // Loop through the files and delete each one
        req.body.forEach((file) => {
        const filePath = path.join(galleryFolder, file);
  
        // Use fs.unlink to delete the file
        fs.unlink(filePath, (err) => {
          if (err) {
            // Handle error if the file cannot be deleted
            console.error('Error deleting file:', err);
            res.status(400).json({ status: `error ${err}` })
                }
            else{
                res.status(200).json({ status: "files deleted" })
            }

            });
        });

        
    }
    else{
        res.status(200).json({ status: "Not allowed" })
    }
  })
  