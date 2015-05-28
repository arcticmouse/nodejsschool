var fs = require('fs');
var buf = fs.readFileSync(process.argv[2], 'utf8');
var lines = buf.split('\n');

console.log(lines.length - 1);