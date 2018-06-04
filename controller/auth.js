const passport = require('../service/passport')
const User = require('../model/User')
const jwt = require('jsonwebtoken'); // auth via JWT for hhtp
const jwtsecret = 'myNewsecretkey';

const login = async(ctx, next) => {
  await passport.authenticate('local', function (err, user) {
    if (user == false) {
      ctx.body = "Login failed";
    } else {
      //--payload - info to put in the JWT
      const payload = {
        id: user.id,
        displayName: user.displayName,
        email: user.email
      };
      const token = jwt.sign(payload, jwtsecret); //JWT is created here

      ctx.body = {user: user.displayName, token: 'JWT ' + token};
    }
  })(ctx, next);

};
const create =  async(ctx, next) => {
  try {
    ctx.body = await User.create(ctx.request.body);
  }
  catch (err) {
    ctx.status = 400;
    ctx.body = err;
  }
}

module.exports = {
  login,
  create
}