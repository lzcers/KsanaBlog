const path = require('path');
const execSync = require('child_process').execSync;
const exec = require('child_process').exec;

const genTagsListProcess = execSync('node ./src/utils/genTagsList.js', {encoding: "utf8"});
console.log(genTagsListProcess);

const buildProcess = exec('cross-env NODE_ENV=production webpack -p --progress --hide-modules');
buildProcess.stdout.on('data', data => console.log(data));
buildProcess.stderr.on('data', data => console.log(data)); 

console.log(execSync('git add -A', {encoding: "utf8"}));
console.log(execSync('git commit -m "update posts"', {encoding: "utf8"}));
console.log(execSync('git push origin develop:master', {encoding: "utf8"}));