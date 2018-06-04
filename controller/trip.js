const getTrips = async(ctx, next) => {
  try {
   console.log(ctx.user)
    const user = ctx.user;
    ctx.body = user.email
    ctx.status = 200
  }
  catch (err) {
    ctx.status = 400;
    ctx.body = err;
  }
}
module.exports = {
  getTrips
}