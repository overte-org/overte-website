# overte.org website

This website is based on Eleventy (https://www.11ty.dev/).

It uses Nunjucks (https://mozilla.github.io/nunjucks/) as the templating engine.

It uses SASS (https://sass-lang.com/) as the CSS extension language.

## Installation

NodeJS and the Node Package Manager are required to install this project locally.

On an Ubuntu based system, install them with:

```sudo apt install nodejs npm```

Then run

```npm install```

and

```npm start```

For other operating systems and general installation instructions for NodeJs, please consult their website https://nodejs.org/en/download/ 

This will run file watchers and Eleventy itself.

All relevant stylesheets and javascript are found in the src folder and will automatically compiled be from there.

## Main branches

There are two main branches: production and development

Development deploys to the staging url

Production deploys to overte.org
