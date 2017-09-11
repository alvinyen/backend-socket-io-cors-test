const http = require('http');
const express = require('express') ;
let app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(5000, function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// const rootRoutes = require('./routes/rootRoutes');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors') ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
};
app.use(cors(corsOptions));

// app.listen(5000, ()=>{
//     console.log(`server is running on port 5000`);
// });

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });
        
  