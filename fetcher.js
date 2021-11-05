// request library;
//
const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
request(args[0], (error, response, body) => {
  try {
    const data = fs.writeFileSync(args[1], body)
    //file written successfully
  } catch (err) {
    console.error(err)
  }
});
