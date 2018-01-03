# Boilerplate Generator

As we go throughout these units you'll reuse a lot of boilerplate code. Luckily for us we can use FS and ![Readline](https://nodejs.org/api/readline.html) to create a boilerplate generator.



## Goals
* As a user when I run `generator.js` i should be prompted asking for a file directory.
* If the directory exists it should create a new `app.js` file within the directory and place our boilerplate in it.
* If the directory does not exist then I should see an error message.


## Boilerplate
Below I have some basic boilerplate code for setting up a server. Don't worry about what this code is doing yet, We'll dive into the `http` module in later units. For now just use the code to populate the js file that your script creates.

```js
let http = require('http');
let port = process.env.PORT || 8000;

let server = http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world');
});

server.listen(port, function() {
  console.log('Listening on port', port);
});
```
