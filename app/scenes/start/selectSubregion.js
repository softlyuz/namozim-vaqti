const { Scenes: {BaseScene}, Markup } = require("telegraf");
const { update } = require("../../database/controllers/user");

function regionsKeyboard(regions) {
  return Markup.keyboard(regions.map(r => r.name), { columns: 3 }).resize()
}

const selectSubRegion = new BaseScene('selectSubRegion')
  .enter((ctx) => ctx.reply("Tumaningizni tanlang", regionsKeyboard(ctx.scene.state.region.subregions)))
  .on("text", async (ctx) => {
    const subregion = ctx.scene.state.region.subregions.find(r => r.name === ctx.message.text)
    if (subregion) {
      ctx.session.user.subregion = subregion
      ctx.session.user.subregionId = subregion.id

      await update(ctx.from.id, ctx.session.user)
      
      return ctx.scene.enter("main")
    }

    return ctx.scene.reenter()
  })
  .use((ctx) => ctx.scene.reenter())

module.exports = selectSubRegion