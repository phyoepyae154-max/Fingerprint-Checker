/*CMD
  command: /fake_payment_fail
  help: 
  need_reply: false
  auto_retry_time: 
  folder: PayMent

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /fake_payment_fail
*/

var fail_text = 
  "❌ <b>ငွေပေးချေမှု မအောင်မြင်ပါ</b> ❌\n" +
  "━━━━━━━━━━━━━━━━━━━━\n\n" +
  "မောင်လေး ပို့လိုက်တဲ့ ပြေစာက မမတို့ဘက်မှာ ငွေဝင်တာ မတွေ့ရသေးလို့ပါရှင်။ 😔\n\n" +
  "<blockquote>• <b>ငွေလွှဲတာ မှန်ကန်ရဲ့လား ပြန်စစ်ပေးပါ</b>\n" +
  "• <b>Reference နံပါတ် လွဲနေတာမျိုး ဖြစ်နိုင်ပါတယ်</b>\n" +
  "• <b>ငွေတကယ်လွှဲထားရင် Admin ကို တိုက်ရိုက်ဆက်သွယ်ပါ</b></blockquote>\n\n" +
  "မောင်လေး... မမတို့ဆီမှာ စောင့်နေတဲ့ အထန်မလေးတွေနဲ့ တွေ့ချင်ရင် အခုပဲ ငွေပြန်လွှဲကြည့်လိုက်ပါဦးနော်... 🫦💦";

var buttons = [
  [{ text: "💳 ငွေပြန်လွှဲမည် (Retry)", callback_data: "/pay" }],
  [{ text: "👩🏻‍💻 Admin ကို ဆက်သွယ်မည်", url: "https://t.me/Phoo22344" }]
];

Api.sendMessage({
  chat_id: chat.chatid,
  text: fail_text,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: buttons }
});

