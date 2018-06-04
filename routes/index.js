const Router = require('koa-router'); // routing
const auth = require('../controller/auth')
const trip = require('../controller/trip')
const isLoggedIn = require('../midleware/auth').isLoggedIn;
const router = new Router();

//------------Routing---------------//

// new user route

router.post('/user', auth.create);

// local auth route. Creates JWT is successful

router.post('/login',auth.login);

// JWT auth route


//logged in access
router.get('/trips', isLoggedIn, trip.getTrips);
// router.get('/trips', auth.test);

module.exports = router