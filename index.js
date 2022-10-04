var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
const router = require('./routes/index');
const detailRouter = require('./routes/detailRouter');
const manageRouter = require('./routes/manageRouter');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());

app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs');

app.use('/', router);
app.use('/detail', detailRouter);
app.use('/manage', manageRouter);

app.listen(3000);