const pwd = require('./pwd');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwd();
  }
  // process.stdout.write("You Typed: " + cmd);
  //process.stdout.write('\nprompt > ');
});
