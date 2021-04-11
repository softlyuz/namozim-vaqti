const { getOne, create } = require("../database/controllers/user");
const { authing } = require("./telegrafUtils");

async function checkAuth(ctx, next) {
  if (!ctx.session.auth) {
    if (ctx.session.authing) return next()

    const _user = await getOne(ctx.from.id)

    // put what user's keys required
    if (_user && _user.auth) {
      ctx.session.user = _user.toJSON()
      ctx.session.auth = true
      return next()
    } else {
      if (!_user) {
        await create(ctx.from.id)
      }

      authing.start(ctx)
      return ctx.scene.enter("start")
    }
  }
  return next()
}

module.exports = checkAuth