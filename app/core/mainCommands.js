// Bu yerda asosiy kamandalar yoziladi. 
// Bu kamandalarni chiqarish uchun utils/keyboards -> getMainKeyboards ga qo'shish lozim
// Bu kamandalarni tutish core/mainHendlers ichida amalga oshadi
// internalizationPath bu app/locales'dagi tarjima uchun yo'l. Oldindan kiritish lozim

const mainCommands = {
    today: {
      id: 1,
      value: "today",
      internalizationPath: "keyboards.main.today"
    },
    monthly: {
      id: 2,
      value: "monthly",
      internalizationPath: "keyboards.main.monthly"
    },
    weekly: {
      id: 3,
      value: "weekly",
      internalizationPath: "keyboards.main.weekly"
    },
    settings: {
      id: 4,
      value: "settings",
      internalizationPath: "keyboards.main.settings"
    },
    notification: {
      id: 5,
      value: "notification",
      internalizationPath: "keyboards.main.notification"
    },
    contact: {
      id: 6,
      value: "contact",
      internalizationPath: "keyboards.main.contact"
    },
  }
  
  module.exports = mainCommands