const del = require("del");
const CleanCSS = require("clean-css");
const { minify } = require("terser");
const dirToClean = "build/*";
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItOptions = {
	html: true,
	breaks: true,
	linkify: true
};
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);
const Image = require("@11ty/eleventy-img");
const glob = require("glob-promise");

module.exports = (config) => {
	del(dirToClean);
	config.setLibrary('md', markdownLib);

	config.addNunjucksAsyncFilter("jsmin", async function (code, callback) {
		try {
			const minified = await minify(code);
			callback(null, minified.code);
		} catch (err) {
			console.error("Terser error: ", err);
			callback(null, code);
		}
	});
	config.addFilter("sortByOrder", arr => {
		arr.sort((a, b) => (a.data.order) > (b.data.order) ? 1 : -1);
		return arr;
	});
	config.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});
	config.addPassthroughCopy("src/img");
	config.addCollection('images', async collectionApi => {
		let files = await glob('./build/img/gallery/*.{jpg,jpeg,png,gif}');
		let images = files.filter(file => {
			return file.indexOf('./build/img/gallery/thumb-') !== 0;
		});

		let collection = images.map(image => {
			return {
				path: image.replace('./build/img/gallery/', '/img/gallery/'),
				thumbpath: image.replace('./build/img/gallery/', '/img/gallery/thumb-')
			}
		});
		return collection;
	});
	config.addPassthroughCopy("src/fonts");
	config.addPassthroughCopy("src/robots.txt");
	config.addPassthroughCopy("src/security.txt");
	config.addPassthroughCopy("src/favicon.ico");
	config.addPassthroughCopy("src/browserconfig.xml");
	config.addPassthroughCopy("src/manifest.json");

	config.addWatchTarget("./src/sass/");
	config.addWatchTarget("./src/css/");
	config.addWatchTarget("./src/img/");
	config.addWatchTarget("./src/fonts/");
	config.addWatchTarget("./src/js/");

	return {
		dir: {
			input: "src",
			output: "build",
		}
	};
};
