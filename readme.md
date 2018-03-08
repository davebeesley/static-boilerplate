# Static Boilerplate

A Boilerplate for building static websites using Nunjucks and Sass

## Build

All 'build' assets should be stored in the `src` folder. This project uses [Nunjucks](https://mozilla.github.io/nunjucks/) for templating and [Sass](https://sass-lang.com/) for CSS Pre-Processing.
Everything is compiled to a `dist` folder (via NPM Scripts, more on that later), you should deploy the contents of this folder to your webserver.

## Getting Started

1.  You should ensure you have [node](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed on your system. Both of these can be installed together [here](https://nodejs.org/). This project was built via Node v9.5.0 and NPM v5.6.0, but should be fine with older versions.
2.  Once installed, in your terminal/console navigate to the root of this project
3.  Install the project dependancies by typing `npm install`, this will also run an initial build of the project and run up a local webserver. So if all is successful, you should see the website in your browser.

## Watching for changes

After the initial build of the project via `npm install` the watch task will run automatically. Should you need to start the watch task again, run `npm run watch` in your terminal/console from the root of the project. To exit the watch task, press `Control + C`

## Editing templates

Templates are stored in the `templates` folder inside `src`. These follow the page structure of the site (plus `_layouts` abd `_includes`). As a rule, each page template has two content areas - `header` and `content` and these correspond to the header section and main content sections of the page. In here you can write any HTML you want in the normal way you would with a standard HTML page. For more information, check out the [Nunjucks Documentation](https://mozilla.github.io/nunjucks/templating.html)
Similarly, the uncompiled Sass is stored in the `scss` folder inside `src`. On the whole, you can write normal CSS in these files and it will compile fine. But if you aren't familiar with Sass/scss please check out the [Sass Guide](https://sass-lang.com/guide)

## Deployment

When you are ready to deploy the project, in yout terminal/console run `npm run build` from the root of your site.
This will empty out the `dist` folder, then compile all of the HTML from the templates, and compile and minify CSS and JavaScript. It will also compress images.
Once this is complete, you can copy everything from the `dist` folder, to your webserver.

### Any problems, contact [David Beesley](https://www.davidbeesley.co.uk/contact/)
