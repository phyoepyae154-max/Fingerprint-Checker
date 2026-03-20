/*CMD
  command: /del_free_btn
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Checker

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /del_free_btn
  need_reply: false
  admin: true
CMD*/

if (!params) { return; }
var index = parseInt(params);

var db1 = Bot.getProperty("DB_FREE_PHOTO1") || [];
var db2 = Bot.getProperty("DB_FREE_PHOTO2") || [];

if (index < db1.length) {
  db1.splice(index, 1);
  Bot.setProperty("DB_FREE_PHOTO1", db1, "json");
} else {
  var db2_index = index - db1.length;
  db2.splice(db2_index, 1);
  Bot.setProperty("DB_FREE_PHOTO2", db2, "json");
}

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "🗑️ ဖျက်ပြီးပါပြီ။",
  show_alert: false
});

var total_remaining = (Bot.getProperty("DB_FREE_PHOTO1") || []).length + (Bot.getProperty("DB_FREE_PHOTO2") || []).length;

if (total_remaining > 0) {
  if (index >= total_remaining) { index = total_remaining - 1; }
  Bot.runCommand("/list_free " + (index < 0 ? 0 : index));
} else {
  Api.deleteMessage({ message_id: request.message.message_id });
  Bot.sendMessage("📭 DB ထဲမှာ ပုံတွေ အကုန်ကုန်သွားပါပြီ Master။");
}

