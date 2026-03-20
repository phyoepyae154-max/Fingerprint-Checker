/*CMD
  command: /view_info
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /view_info
CMD*/

var idx = User.getProperty("last_free_index");
var infos = Bot.getProperty("DB_FREE_TEXT") || [];
var data = infos[idx];

if (!data) {
  return Api.answerCallbackQuery({ callback_query_id: request.id, text: "⚠️ ဒီပုံအတွက် အချက်အလက် မရှိသေးပါ!" });
}

var full_info = 
  "◈ 𝐏𝐫𝐨𝐟𝐢𝐥𝐞 ◈\n" +
  "━━━━━━━━━━━\n\n" +
  "<blockquote>အမည် • " + data.name + "</blockquote>\n" +
  "<blockquote>အသက် • " + data.age + "</blockquote>\n" +
  "<blockquote>နေရာ • " + data.city + "</blockquote>\n" +
  "<blockquote>အခြေအနေ • " + data.status + "</blockquote>\n\n" +
  "• <b>မမအကြောင်း</b>\n" +
  "<blockquote><i>“ " + data.note + " ”</i></blockquote>\n\n" +
  "━━━━━━━━━━━\n" +
  "🔥 <i>မမလေးနဲ့ တိုက်ရိုက်ချိတ်ဆက်ဖို့ အောက်ကခလုတ်ကို နှိပ်ပါ</i>";

var buttons = [
  [{ text: "💖 မမလေး ချိတ်မယ်", callback_data: "/connect_girl?id=" + idx }],
  [{ text: "🔙 နောက်သို့", callback_data: "/get_free" }]
];

Api.editMessageCaption({
  caption: full_info,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: buttons }
});

