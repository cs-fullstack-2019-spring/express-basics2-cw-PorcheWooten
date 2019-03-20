const express = require('express');

const app = express();

var mem = require('./members');
var guest = require('./guest');

app.use('/mem',mem);
app.use('/guest', guest);



app.listen(8000);