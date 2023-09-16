import { PurgeCSS } from 'purgecss';
import { writeFileSync } from 'fs';
import { log } from 'console';

(async () => {
  const purgecss = await new PurgeCSS().purge({
    content: ['*.html', './assets/maugallery.js', './assets/scripts.js', './assets/bootstrap/bootstrap.bundle.js'],
    css: ['./assets/bootstrap/boot.min.css' ],
    safelist: ['mb-4', 'col-12', 'col-sm-6', 'col-md-4', 'col-lg-4', 'col-xl-4'],
    keyframes: true,
    fontFace: true,
    variables: true,
    rejected: true,
    rejectedCss: true

});

purgecss.forEach((file, index) => {
    writeFileSync(`./assets/purged/style.min5.${index}.css`, file.css);
    writeFileSync(`./assets/purged/rejected.min5.${index}.css`, file.rejectedCss);
  });
    // create file for rejected css
    //  './assets/bootstrap/bootstrap.bundle.min.js'
})();

