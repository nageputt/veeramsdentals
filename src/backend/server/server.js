const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const specialitesRoutes = require('../routes/specialiteRoutes.js');
const app = express();

//view engine setup
app.engine('handlebars', exphbs);
app.set('view engine', 'handlebars');

//static folder
app.use('/public', express.static(path.join(__dirname,'public')));

//body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/specialites',specialitesRoutes);

app.listen(3040);


