function deleteMessage(ctx) {
  try {
    if (ctx.session.deleteMessageId) {
      let messageId = ctx.session.deleteMessageId
      delete ctx.session.deleteMessageId
      console.log(messageId);
      ctx.telegram.deleteMessage(ctx.chat.id, messageId)
    }
  } catch (error) {
    console.log("deleteMessage error: ", error);
  }
}

const authing = {
  start: (ctx) => {
    ctx.session.authing = true
  },
  end: (ctx) => {
    delete ctx.session.authing
  }
}

module.exports = {
  authing,
  deleteMessage
}