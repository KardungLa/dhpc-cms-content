const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
  const files = [
    './dist/dhpc-cms-content/runtime.js',
    './dist/dhpc-cms-content/polyfills.js',
  //  './dist/dhpc-cms-content/es2015-polyfills.js',
  //  './dist/dhpc-cms-content/scripts.js',
    './dist/dhpc-cms-content/main.js'
  ];

  await fs.ensureDir('dhpc');
  await concat(files, 'dhpc/dhpc-cms-content.js');
}
build();
