require('dotenv').config();
require('./config/database'); // connects to db
const express = require('express');
const cors = require('cors');
const path = require('path'); // node module
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();
// development port: 3001
// in production we'll a PORT number set in the environment variables
const PORT = process.env.PORT || 3001;



//* Config
// CORS middleware
app.use(cors());
// Logger middleware
app.use(logger('dev'));
// JSON payload middleware (for data coming from frontend functions)
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
// checks if token was sent and sets a user data on the req (req.user)
app.use(require('./config/checkToken'));

// * All other routes
//app.use('/api/users', require('./routes/api/users'));


// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));
//app.use('/api/categories', ensureLoggedIn, require('./routes/api/categories'));


// Put API routes here, before the "catch all" route
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})