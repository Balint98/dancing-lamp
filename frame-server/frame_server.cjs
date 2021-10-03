const fs = require('fs');
const readline = require('readline');

module.exports = function processLineByLine() {
  let lines = [];
  const rl = readline.createInterface({
    input: fs.createReadStream('dtl.csv'),
    crlfDelay: Infinity
  });

  rl.on('line', (line) => {
    lines.push(line.split(';'));
  });
  return lines;
}