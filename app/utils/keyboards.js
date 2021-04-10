const { Markup } = require('telegraf');
const mainCommands = require("../core/mainCommands");

function callbackButton(ctx, m, text) {
  return m.callbackButton(
    ctx.i18n.t('keyboards.home.' + text),
    JSON.stringify({ a: text })
  )
}

function getToHomeKB(ctx) {
  return Markup.inlineKeyboard(
    [Markup.callbackButton(ctx.i18n.t("keyboards.to_home"), "to_home")]
  ).extra({ parse_mode: "HTML" })
}

function getMainKeyboard(ctx) {
//     Markup.keyboard([
//       [ctx.i18n.t(mainCommands.today.internalizationPath)],
//       [ctx.i18n.t(mainCommands.hourly.internalizationPath), ctx.i18n.t(mainCommands.weekly.internalizationPath)],
//       [ctx.i18n.t(mainCommands.settings.internalizationPath), ctx.i18n.t(mainCommands.notification.internalizationPath)],
//       [ctx.i18n.t(mainCommands.contact.internalizationPath)]
//     ]).resize();
    return Markup.keyboard([
      ['⏳ Bugungi'],
      ['🕔 Haftalik', '🕰 Oylik'],
      [`📍 Hududni o'zgartirish`]
    ]).resize();
}

function getLanguageKeyboard() {
  return Markup.inlineKeyboard(
      [
        Markup.callbackButton("🇺🇿 O'zbek", 'language uz'),
        Markup.callbackButton("🇷🇺 Русский", 'language ru')
      ],
    );
}

function getProductKeyboard(ctx) {
  return Markup.inlineKeyboard(
      [
        [Markup.callbackButton(ctx.i18n.t('keyboards.product.add_basket'), JSON.stringify({ a: 'add_basket' }), false)],
        [Markup.switchToCurrentChatButton(ctx.i18n.t('keyboards.home.search'), '')],
        [Markup.callbackButton(ctx.i18n.t('keyboards.to_home'), JSON.stringify({ a: 'to_home' }), false)]
      ],
  );
}

function getContinueKeyboard(ctx) {
  return Markup.inlineKeyboard(
      [
        [Markup.callbackButton(ctx.i18n.t('keyboards.checkout'), JSON.stringify({ a: 'checkout' }), false)],
        [Markup.switchToCurrentChatButton(ctx.i18n.t('keyboards.home.search'), '')],
        [Markup.callbackButton(ctx.i18n.t('keyboards.to_home'), JSON.stringify({ a: 'to_home' }), false)]
      ],
    );
}

module.exports = {
  getLanguageKeyboard,
  getMainKeyboard,
  getProductKeyboard,
  getContinueKeyboard,
  getToHomeKB
}