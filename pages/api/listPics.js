const path = require('path');
const fs = require('fs');


let print=function(text){
   console.log(...text)
}

const publicFolderPath = path.join(__dirname, '../../../../public/gallery')

export default function handler(req, res) {
    print(["%%%%%%%%%%%%%%%%^^^^^%%%%%%%%%%%%%%%%%%%\n",__dirname])
    fs.readdir(publicFolderPath, (err, files) => {
        if (err) {
          console.error('Error reading public folder:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
        res.status(200).json(files)
        
      });


      

    
  }
  