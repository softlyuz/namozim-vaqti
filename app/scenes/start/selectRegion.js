const { Scenes: {BaseScene}, Markup } = require("telegraf");

function regionsKeyboard(regions) {
  return Markup.keyboard(regions.map(r => r.name), { columns: 3 }).resize()
}

const selectRegion = new BaseScene('selectRegion')
  .enter((ctx) => ctx.reply("Hududni tanlang", regionsKeyboard(ctx.regions)))
  .on("text", async (ctx) => {
    const region = ctx.regions.find(r => r.name === ctx.message.text)
    if (region) {
      return ctx.scene.enter("selectSubRegion", { region })
    }
    return ctx.scene.reenter()
  })
  .use((ctx) => ctx.scene.reenter())

module.exports = selectRegion