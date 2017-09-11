const express = require('express') ;
let app = express();

// const rootRoutes = require('./routes/rootRoutes');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors') ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.listen(5000, ()=>{
    console.log(`server is running on port 5000`);
});