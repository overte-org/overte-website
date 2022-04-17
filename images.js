
const Image = require("@11ty/eleventy-img");
const del = require("del");
const glob = require("glob-promise");

const THUMB = 500;
const FULL = 1920;
del("./src/img/gallery/*");
(async () => {

    let options = {
        widths: [THUMB,FULL],
        formats: ['jpg'],
        outputDir: "./src/img/gallery/",
        filenameFormat:function(id, src, width, format, options) {
            let origFilename = src.split('/').pop();
            let parts = origFilename.split('.');
            parts.pop();
            origFilename = parts.join('.');

            if(width === THUMB) return `thumb-${origFilename}.${format}`;
            else return `${origFilename}.${format}`;
        }
    };

    let files = await glob('./src/screenshots/*.{jpg,jpeg,png,gif}');
    for(const f of files) {
        console.log(`processing ${f}`);
        await Image(f, options);
    };

})();