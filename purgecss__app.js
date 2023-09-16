import { PurgeCSS } from 'purgecss';
import { writeFileSync } from 'fs';
import { log } from 'console';

(async () => {
  const purgecss = await new PurgeCSS().purge('./purgecss.config.js');

  purgecss.forEach((file, index) => {
    writeFileSync(`./assets/purged/style.min${index}.css`, file.css);
    writeFileSync(`./assets/purged/rejected${index}.css`, file.rejected);
  });
    // create file for rejected css
})();