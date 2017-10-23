'use strict';

var fs = require('fs');

module.exports = function () {

  var buffer = fs.readFileSync('./package.json');
  var packageJson = JSON.parse(buffer.toString());
  var packages = [];


  for (packageName in packageJson.mainfiles) {
    var mainFileFolder = './node_modules/' + packageName;
    var libFiles = [];

    var mainfilesArray = packageJson.mainfiles[packageName];


    for (var i = 0; i < mainfilesArray.length; i++) {
      packages.push(mainFileFolder + mainfilesArray[i]);        
    }

  }

  return packages;
};
