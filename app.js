  
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

var serv = app.listen(port);

app.get('/',function(req, res) {
	res.sendFile(path.join(__dirname , 'publico','index.html'));
});
app.use('/publico',express.static(path.join(__dirname , 'publico')));


const socketIO = require('socket.io');
const io = socketIO(serv);


io.on('connection',(socket)=>{


    socket.on('linea',() =>{
		console.log("apunto",socket.id);
	});
          
});