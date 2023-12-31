import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync, writeFile } from 'fs';
import path from 'path';

//enter below the path returned by lighthouse and the quality of the image: 
const input = './assets/images/facebook.png';


const file = path.basename(input);
const fileName = path.parse(input).name;
const directory = path.dirname(input);
const newRelDir = directory.substr(directory.indexOf("assets") -1)
const reduced = null ;
const reducedAttribute = reduced ? `-quality-${reduced}` : '';
const size = 40;
const sizeAttribute = size ? `-size-${size}` : '';
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
    .toFile(`.${newRelDir}/${fileName}${sizeAttribute}${reducedAttribute}.webp`)    

}


isFileImage(input) ? 
    (
        console.log('is File Image'),
        reduceFile()
    )
: console.log('is not File Image');
