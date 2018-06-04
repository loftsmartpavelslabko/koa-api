const passport = require('../service/passport')

const isLoggedIn = async(ctx, next) => {
  await passport.authenticate('jwt', function (err, user) {
    if (user) {
      ctx.user = user;
      next();
    } else {
      ctx.body = "No such user";
      console.log("err", err)
    }
  } )(ctx, next)

}
module.exports = {
  isLoggedIn
}