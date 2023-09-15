import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync, writeFile } from 'fs';
import path from 'path';
const input = 'http://127.0.0.1:5500/assets/images/nina/nina-small-medium.webp';
const file = path.basename(input);
const fileName = path.parse(input).name;
const directory = path.dirname(input);
const newRelDir = directory.substr(directory.indexOf("5500") + 4)
const reduced = 50;
// const size = 700;

function isFileImage(input) {
  const ext = path.extname(input);
  console.log(ext.toLocaleLowerCase(), ext);
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
    // .resize(size, null)
    .webp({ quality: reduced })
    .toFile(`.${newRelDir}/${fileName}-${reduced}.webp`)    
}


isFileImage(input) ? 
    (
        console.log('is File Image'),
        reduceFile()
    )
: console.log('is not File Image');
