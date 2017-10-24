# gulp-npm-mainfiles
===========

Push "mainfiles" from node_modules to a specific folder


Use the package.json file as the source and this plugin will filter "mainfiles" as described in the package.json.


## Installation

```bash
$ npm install gulp-npm-mainfiles -D
```
## Usage

```javascript
var gulp 			= require('gulp'),
	npmMainfiles    = require('gulp-npm-mainfiles');

/* Push main files from node modules to a specific folder*/
gulp.task("gulp-npm-mainfiles", function () {
    gulp.src(npmMainfiles(), { base: "./node_modules" })
        .pipe(gulp.dest('./assets/lib'));
});
```

Please report bugs and contribute at github [gulp-npm-mainfiles](https://github.com/themewagon/gulp-npm-mainfiles). 