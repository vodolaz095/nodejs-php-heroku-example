var http = require('http'),
  exec = require('child_process').exec;

http.createServer(function (req, res) {
  child = exec('php script.php',
    function (error, stdout, stderr) {
      if(error){
        throw error;
      } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(stdout);
      }
    });
}).listen(process.env.PORT || 3000);
