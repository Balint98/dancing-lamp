import { createReadStream } from 'fs';
import { createInterface } from 'readline';

export default function processLineByLine() {
  let lines = [];
  const rl = createInterface({
    input: createReadStream('dtl.csv'),
    crlfDelay: Infinity
  });

  rl.on('line', (line) => {
    lines.push(line.split(';'));
  });
  return lines;
}