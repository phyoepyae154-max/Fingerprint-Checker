/*CMD
  command: /give_love
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
  command: /give_love
  need_reply: false
CMD*/

if (!params) { return; }
var idx = params;

// ၁။ User က ဒီ Profile ကို ပေးပြီးသားလား စစ်မယ်
var reacted_key = "reacted_to_" + idx;
var has_reacted = User.getProperty(reacted_key);
var love_counts = Bot.getProperty("LOVE_COUNTS") || {};

if (has_reacted) {
  // ၂။ ပြန်ဖြုတ်မည့်အပိုင်း
  love_counts[idx] = Math.max(0, (love_counts[idx] || 1) - 1);
  User.setProperty(reacted_key, false, "boolean");
  
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "💔 အချစ်တွေကို ပြန်ရုပ်သိမ်းလိုက်ပါပြီ။",
    show_alert: false
  });
} else {
  // ၃။ အသစ်ပေးမည့်အပိုင်း
  love_counts[idx] = (love_counts[idx] || 0) + 1;
  User.setProperty(reacted_key, true, "boolean");

  // ❤️ Telegram Message Reaction Animation ပြမယ်
  Api.setMessageReaction({
    chat_id: user.telegramid,
    message_id: request.message.message_id,
    reaction: [{ type: "emoji", emoji: "❤️" }],
    is_big: true
  });

  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "❤️ မမကို အချစ်တွေ ပေးလိုက်ပြီ!",
    show_alert: false
  });
}

// ၄။ Love Counts ကို DB မှာ သိမ်းမယ်
Bot.setProperty("LOVE_COUNTS", love_counts, "json");

// ၅။ မူရင်း Message ရဲ့ ခလုတ်ပေါ်က ဂဏန်းကို Update လုပ်မယ်
var buttons = request.message.reply_markup.inline_keyboard;
buttons[0][0].text = "❤️ " + love_counts[idx];

Api.editMessageReplyMarkup({
  chat_id: user.telegramid,
  message_id: request.message.message_id,
  reply_markup: { inline_keyboard: buttons }
});

