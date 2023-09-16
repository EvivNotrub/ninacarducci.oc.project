const bob = {
    content: ['*.html', './assets/maugallery.min.js', './assets/scripts.min.js', './assets/bootstrap/bootstrap.bundle.min.js'],
    css: ['./assets/bootstrap/boot.min.css', './assets/style.min.css'],

    keyframes: true,
    fontFace: true,
    variables: true,
    rejected: true,
    rejectedCss: true

}

//     "purgecss": "purgecss --css boot.min.css --content index.html --out dist/",
//     in package json

export default bob;