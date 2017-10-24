# gulp-npm-mainfiles
===========

Push "mainfiles" from node_modules to a specific folder


Use the package.json file as the source and this plugin will filter "mainfiles" as described in the package.json.


## Installation

```bash
$ npm install gulp-npm-mainfiles -D
```

## Usage

### In your package.json, use "mainfiles" to tell which files you want to push in production as following:

```json
{
	"name": "YourPackageName",
	"version": "0.5.0",
	"description": "Some description",
	"main": "gulpfile.js",
	"dependencies": {
		...
		...
		"bootstrap": "^4.0.0-beta.2",
		"jquery": "^3.1.0",
		"popper.js": "^1.12.6",
		...
		...
	},
	"devDependencies": {
		...
		...
		"gulp": "github:gulpjs/gulp",
		"gulp-npm-mainfiles": "^1.0.3"
		...
		...
	},
	"mainfiles": {
		"jquery": [
			"/dist/jquery.min.js"
		],
		"bootstrap": [
			"/dist/css/bootstrap.min.css",
			"/dist/js/bootstrap.min.js"
		],
		"popper.js": [
			"/dist/**/*.*"
		]
	},
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "Themewagon <info@themewagon.com>",
	"license": "ISC"
}
```


### In your gulpfile.js

```javascript
var gulp         = require('gulp'),
    npmMainfiles = require('gulp-npm-mainfiles');

/* Push main files from node modules to a specific folder*/
gulp.task("gulp-npm-mainfiles", function () {
    gulp.src(npmMainfiles(), { base: "./node_modules" })
        .pipe(gulp.dest('./assets/lib'));
});
```

Please report bugs and contribute at github [gulp-npm-mainfiles](https://github.com/themewagon/gulp-npm-mainfiles). 
