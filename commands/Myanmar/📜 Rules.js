/*CMD
  command: 📜 Rules
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Myanmar

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: 📜 Rules
*/

var rules_text = 
  "⚠️ <b>မောင်လေးတို့ သိထားရမယ့် စည်းကမ်းချက်များ</b> ⚠️\n" +
  "━━━━━━━━━━━━━━━━━━━━\n\n" +
  "၁။ 💎 <b>VIP မန်ဘာဝင်ထားသူများ:</b>\n" +
  "╰┈➤ VIP သက်တမ်းမှာ <b>(၁) လ</b> တိတိဖြစ်ပြီး သက်တမ်းကုန်ဆုံးပါက စနစ်မှ <b>Auto</b> ထုတ်ပယ်သွားမှာဖြစ်ပါတယ်ရှင်။ ⏳\n\n" +
  "၂။ 🚫 <b>Bot ကို နှောင့်ယှက်သူများ:</b>\n" +
  "╰┈➤ Bot ကို Error တက်အောင်လုပ်ခြင်း (သို့မဟုတ်) Spam ပို့ခြင်းများ ပြုလုပ်ပါက <b>ရာသက်ပန် (Permanent Ban)</b> အရေးယူသွားမှာပါ... လုံးဝ ပြန်ဖွင့်ပေးမှာ မဟုတ်ဘူးနော်။ ❌\n\n" +
  "၃။ 📸 <b>မူပိုင်ခွင့်:</b>\n" +
  "╰┈➤ မမတို့ဆီက ပုံတွေကို တစ်ဆင့်ပြန်ရောင်းတာမျိုး တွေ့ရှိရင်လည်း ချက်ချင်း Ban မှာမို့ သတိထားပေးပါရှင်။\n\n" +
  "<blockquote>🫦 <b>မမတို့နဲ့ အကြာကြီး ကဲချင်ရင်တော့ စည်းကမ်းလေးတွေကို လိုက်နာပေးကြပါနော်... 💋👅</b></blockquote>";

var back_kb = [
  [{ text: "🏠 ပင်မစာမျက်နှာသို့ ပြန်ရန်", callback_data: "/show_welcome_direct" }]
];

Api.sendMessage({
  chat_id: chat.chatid,
  text: rules_text,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: back_kb }
});

