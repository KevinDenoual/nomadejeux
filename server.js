const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const expressSession = require('express-session');
const path = require('path');
const handlebars = require('handlebars')
const methodOverride = require('method-override');


const app = express()
const mongoStore = MongoStore(expressSession);
const port = 3000
const urlDB = "mongodb://localhost:27017/nomadejeux"


// Method-override
app.use(methodOverride('_method'));

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Express-static
app.use(express.static('public')); 
app.use('/assets', express.static('public'));

// Express Session
app.use(expressSession({
    secret: 'securite',
    name: 'cookie',
    saveUninitialized: true,
    resave: false,
    store: new mongoStore(
        { mongooseConnection: mongoose.connection }
    ),
    expires: new Date(Date.now() + (3600000))
}));


// Mongoose 
mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Handlebars
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');


// Router 
const router = require('./api/router')
app.use("/", router)

// Error404
app.use((req, res) => {
    res.render('error404')
})

// Port
app.listen(port, function () {
    console.log("Le serveur tourne sur le port : " + port);

})