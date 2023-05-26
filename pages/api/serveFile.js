import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { fileName } = req.query;
  const decodedFileName = decodeURIComponent(fileName); // URL decode the file name
  const filePath = path.join(process.cwd(), '/public/gallery', fileName);
  console.log("//// file path serveFile.js /////",filePath)
  
  if (!fs.existsSync(filePath)) {
    res.status(404).end('File not found');
    return;
  }

  const fileStream = fs.createReadStream(filePath);

  res.setHeader('Content-Type', 'application/octet-stream');
  fileStream.pipe(res);
}