const fs = require('fs');
const readline = require('readline');

let lines = [];
module.exports = async function processLineByLine() {
  const fileStream = fs.createReadStream('dtl.csv');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    //console.log(`Line from file: ${line}`);
    lines.push(line.split(';'));
  }
  console.log("one line's length: ", lines[0].length);
//   console.log(lines[0]);
  // console.dir(lines[0], {'maxArrayLength': null});
  // console.dir(lines[1], {'maxArrayLength': null});
  // console.dir(lines[2], {'maxArrayLength': null});
  // console.dir(lines[3], {'maxArrayLength': null});
  // console.dir(lines[4], {'maxArrayLength': null});
  
  for (let i = 0; i<lines[0].length; i++){
    if(i % 64 === 0){
        // console.log("");
    }
    // process.stdout.write(lines[0][i]);
  }
  return lines;
}