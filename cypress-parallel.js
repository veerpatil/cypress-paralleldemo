const fs = require('fs');
const path = require('path');

// const NODE_INDEX = Number(process.env.CI_NODE_INDEX || 1 );
// const NODE_TOTAL = Number(process.env.CI_NODE_TOTAL || 1);

const NODE_INDEX = Number(process.argv[2] || 1);
const NODE_TOTAL = Number(process.argv[3] || 1);

const TEST_FOLDER = './cypress/e2e';

// This log will be printed out to the console
// so that cypress will know which files will be run.
// Also, since getSpecFiles returns an array, the paths are
// joined with comma
//console.log('"' + getSpecFiles().join(',') + '"');
console.log(getSpecFiles().join(','))

function getSpecFiles() {
  const allSpecFiles = walk(TEST_FOLDER);
  const node_index= NODE_INDEX +1;
console.log(node_index)
  console.log("The number of sepcs:"+ allSpecFiles.sort()
  .filter((_, index) => (index % NODE_TOTAL) === (node_index - 1)).length)
  return allSpecFiles.sort()
    .filter((_, index) => (index % NODE_TOTAL) === (node_index - 1));
   
}

function walk(dir) {
  let files = fs.readdirSync(dir);
  files = files.map(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) return walk(filePath);
    else if (stats.isFile())return filePath;
  });

  return files
    .reduce((all, folderContents) => all.concat(folderContents), []);

}