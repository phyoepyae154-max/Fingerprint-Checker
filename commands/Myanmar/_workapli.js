/*CMD
  command: /workapli
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
  command: /workapli
*/

var comming_soon_text = 
  "🫦 <b>မမတို့နဲ့အတူ အလုပ်လုပ်ချင်လို့လားဟင်...</b>\n" +
  "━━━━━━━━━━━━━━━━━━━━\n\n" +
  "စိတ်ဝင်စားပေးလို့ ကျေးဇူးတင်ပါတယ် မောင်လေး (အိုး... မမလေး ဖြစ်မှာပေါ့နော်)။ 🍑\n\n" +
  "လောလောဆယ် <b>အလုပ်လျှောက်ရန် Form</b> လေးကို ပြင်ဆင်နေဆဲမို့ ခဏလေးပဲ သည်းခံပြီး စောင့်ပေးပါဦးနော်။\n\n" +
  "<blockquote>✨ <b>Coming Soon...</b>\n" +
  "မကြာခင်မှာ မမတို့နဲ့အတူ အပီအပြင် ကဲလို့ရမယ့် အခွင့်အရေးတွေ ရောက်လာတော့မှာပါ... 💦</blockquote>\n\n" +
  "အဆင်သင့်ဖြစ်တာနဲ့ Bot ကနေ အသိပေးချက် ပို့ပေးမယ်နော်... 💋👅";

var back_kb = [
  [{ text: "🏠 ပင်မစာမျက်နှာသို့ ပြန်ရန်", callback_data: "/show_welcome_direct" }]
];

Api.sendMessage({
  chat_id: chat.chatid,
  text: comming_soon_text,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: back_kb }
});

