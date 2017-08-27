const path = require('path');
const execSync = require('child_process').execSync;
const exec = require('child_process').exec;

const genTagsListProcess = execSync('node ./src/utils/genTagsList.js', {encoding: "utf8"});
console.log(genTagsListProcess);

const buildProcess = exec('npm run build');
buildProcess.stdout.on('data', data => console.log(data));
buildProcess.stderr.on('data', data => console.log(data)); 
buildProcess.on('close', (code, signal) => {
  console.log('build success...');
  console.log('start publish...');
  console.log(execSync('git add -A', {encoding: "utf8"}));
  console.log(execSync('git commit -m "publish"', {encoding: "utf8"}));
  console.log(execSync('git push origin develop:master', {encoding: "utf8"}));
})