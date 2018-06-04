const Koa = require('koa'); // core
const bodyParser = require('koa-bodyparser'); // POST parser
const serve = require('koa-static'); // serves static files like index.html
const logger = require('koa-logger'); // optional module for logging
const passport = require('koa-passport'); //passport for Koa



const socketioJwt = require('socketio-jwt'); // auth via JWT for socket.io

const socketIO = require('socket.io');

const mongoose = require('mongoose'); // standard module for  MongoDB

const app = new Koa();
const router = require('./routes/index');

app.use(serve('public'));
app.use(logger());
app.use(bodyParser());

app.use(passport.initialize()); // initialize passport first
app.use(router.routes()); // then routes
const server = app.listen(3000);// launch server on port  3000

mongoose.Promise = Promise; // Ask Mongoose to use standard Promises
mongoose.set('debug', true);  // Ask Mongoose to log DB request to console
mongoose.connect('mongodb://ride_manager_user:!Q2w3e4r@ds247830.mlab.com:47830/ride_manager'); // Connect to local database
mongoose.connection.on('error', console.error);


//
// //---Socket Communication-----//
// let io = socketIO(server);
//
// io.on('connection', socketioJwt.authorize({
//   secret: jwtsecret,
//   timeout: 15000
// })).on('authenticated', function (socket) {
//
//   console.log('this is the name from the JWT: ' + socket.decoded_token.displayName);
//
//   socket.on("clientEvent", (data) => {
//     console.log(data);
//   })
// });
