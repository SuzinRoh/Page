var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request , response){
    var url = request.url;
    if(request.url == '/'){
        url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
});
app.listen(3000);