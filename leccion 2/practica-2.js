/**
 * Hola mundo v2.0
 */
 
 var http = require('http');
 var port = process.env.PORT || 3000;
 
 var server = http.createServer(function(req, res){
     res.write('hola mundo');
     res.end();
 });
 
server.listen(port);
 console.log('Node server is listening at port %s', port);