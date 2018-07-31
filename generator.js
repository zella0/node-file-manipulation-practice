const fs = require('fs');
const readline = require('readline');
const serverStarter = require('./server-starter.js');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// If the directory exists it should create a new app.js file within the directory and place our boilerplate in it.
// If the directory does not exist then I should see an error message.

function setBoilerPlate(){
  rl.question('Please enter a file directory path ', (answer) => {
    // TODO: Log the answer in a database
    return fs.exists(answer, (exist)=>{
      if(exist === false){
        console.log('Error: directory does not exist.');
        setBoilerPlate();
      }else{
        fs.readFile('./server-starter.js', 'utf8', (err, data) => {
          if (err) throw err;
          fs.writeFile('./boilerplate/app.js', data, (err, data) => {
            if (err) throw err;
            console.log('File has been sucessfully copied!')
          })
      });
      }
    })
    rl.close();
  });
}

setBoilerPlate();
