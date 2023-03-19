var express = require('express');
var app = express();
var path = require('path');

//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
//var fileUpload = require('express-fileupload');
//var compression = require('compression');

var indexRouter = require('./api/index');

/*
var usersRouter = require('./api/users');
var detailRouter = require('./api/wtch');
var privacyRouter = require('./api/privacy');
var aboutusRouter = require('./api/aboutus');
var xhrRouter = require('./api/xhr');
*/


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(fileUpload());
//app.use(logger('dev'));
//app.use(compression());

//app.use(express.json({limit: '500mb'}));
//app.use(express.urlencoded({ limit: '500mb',extended: false }));
//app.use(cookieParser());

app.use(express.json({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/index', indexRouter);

/*
app.use('/users', usersRouter);
app.use('/wtch', detailRouter);
app.use('/privacy', privacyRouter);
app.use('/aboutus', aboutusRouter);
app.use('/xhr', xhrRouter);
*/


const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
