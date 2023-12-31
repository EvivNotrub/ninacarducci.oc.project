import {generate} from 'critical';

//package json options
//     "critical": "critical --base ./ --inline index.html --css boot.min.css --width 1300 --height 900 --minify --extract --out dist/"


generate({
    // Inline the generated critical-path CSS
    // - true generates HTML
    // - false generates CSS
    inline: true,
  
    // Your base directory
    base: './',
   
    // HTML source file
    src: './index.html',
  
    // Your CSS Files (optional)
    // './assets/style.css',
    // css: ['./assets/bootstrap/bootstrap.css'],
  

    dimensions: [
        {
          height: 900,
          width: 400,
        },
        {
            height: 969,
            width: 1920,
        },
      ],
  
        // // Viewport width
        // width: 1300,
    
        // // Viewport height
        // height: 900,
  
    // Output results to file
    target: {
      css: './dist/critical.css',
      html: './dist/index.html',
      uncritical: './dist/uncritical.css',
    },
  
    // Extract inlined styles from referenced stylesheets
    extract: true,
  
        // // ignore CSS rules
        // ignore: {
        // atrule: ['@font-face'],
        // rule: [/some-regexp/],
        // decl: (node, value) => /big-image\.png/.test(value),
        // },

  }, (err, output) => {
    if (err) {
      console.error(err);
    } else if (output) {
      console.log('Generated critical CSS');
    }
  });