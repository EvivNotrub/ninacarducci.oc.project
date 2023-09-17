import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync, writeFile } from 'fs';
import path from 'path';

//enter below the path returned by lighthouse and the sizes of the image: ressource sizes and potential saving 
const input = 'http://127.0.0.1:5500/assets/images/slider/edward-cisneros-3_h6-1NPDGw-unsplash/edward-cisneros-3_h6-1NPDGw-unsplash.webp';


const file = path.basename(input);
const fileName = path.parse(input).name;
const directory = path.dirname(input);
const newRelDir = directory.substr(directory.indexOf("assets") -1)
const reduced = 65;
const size = 1860;
console.log("reduced", reduced);
function isFileImage(input) {
  const ext = path.extname(input);
  switch (ext.toLowerCase()) {
  case '.jpg':
  case '.gif':
  case '.bmp':
  case '.png':
  case '.jpeg':
    case '.webp':
    //etc
    return true;
  }
  return false;
}

async function reduceFile() {
    await sharp(`.${newRelDir}/${file}`)
    .resize(size, null)
    // .webp({ quality: reduced })
    // .toFile(`.${newRelDir}/${fileName}-${reduced}.webp`)    
    .toFile(`.${newRelDir}/${fileName}-${size}.webp`)    

}


isFileImage(input) ? 
    (
        console.log('is File Image'),
        reduceFile()
    )
: console.log('is not File Image');
