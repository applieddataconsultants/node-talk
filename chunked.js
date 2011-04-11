// chunked HTTP example

http = require('http')

var s = http.Server(function(req,res){
    res.writeHead(200,{ 'content-type': 'text/plain' });
    setTimeout(function(){
        res.end('World\n')
    },2000);
    res.write('Hello\n');
});

s.listen(3000);
console.log('Server started on port 3000');
