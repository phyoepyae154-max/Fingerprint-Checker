/*CMD
  command: /ask_payment
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
  command: /ask_payment
  need_reply: false
CMD*/

var payment_text = "⚠️ <b>Security Access Required</b>\n\n" +
  "ကိုကို... မမအိနဲ့ တိုက်ရိုက်ချိတ်ဆက်ဖို့အတွက် VIP Membership (၁၀,၀၀၀ ကျပ်) အရင်ဝင်ရပါမယ်။ ဒါမှသာ နှစ်ဦးနှစ်ဖက် လုံခြုံမှုရှိမှာပါရှင်... <tg-emoji emoji-id=5312526553238838345>🍭</tg-emoji>";

var buttons = [
  [{ text: "💸 Kpay/Wave ဖြင့် ငွေလွှဲမည်", url: "https://t.me/YourAdminID" }],
  [{ text: "☎️ အကူအညီတောင်းရန်", callback_data: "/support" }]
];

// message_id ရှိမရှိ စစ်ဆေးပြီး Edit လုပ်မလား၊ အသစ်ပို့မလား ဆုံးဖြတ်မယ်
if (request.message && request.message.message_id) {
  Api.editMessageCaption({
    message_id: request.message.message_id,
    caption: payment_text,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: buttons }
  });
} else {
  // message context မရှိရင် စာအသစ်အနေနဲ့ ပို့ပေးမယ်
  Api.sendMessage({
    text: payment_text,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: buttons }
  });
}

// ⚡ ၅ စက္ကန့် စောင့်ပြီး သနားတတ်တဲ့ မမအဖြစ် သရုပ်ဆောင်မယ်
Bot.run({
  command: "/generous_move",
  delay: 5 
});

