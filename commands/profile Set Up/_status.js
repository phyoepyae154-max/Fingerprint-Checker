/*CMD
  command: /status
  help: 
  need_reply: false
  auto_retry_time: 
  folder: profile Set Up

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /myprofile
  need_reply: false
CMD*/

// ၁။ ကိုကို Manual ပြင်ရန် ကိန်းဂဏန်းများ
var total_members = "1.4k"; 
var vip_members = "48";
var reacts = "81";
var views = "1.3k";

// ၂။ အချိန်အလိုက် Range ရွေးချယ်ခြင်း (၂ နာရီတစ်ခါ)
var hr = new Date().getHours();
var time_block = Math.floor(hr / 2);
var seed = (time_block % 3); 

// ၃။ ၅ စက္ကန့်အတွင်း တစ်ခါပဲ Variation ပြောင်းမည့် Logic
// Date.now() / 5000 က ၅ စက္ကန့်တိုင်းမှာ တစ်ကြိမ်ပဲ တန်ဖိုးပြောင်းလဲမှာပါ
var time_seed = Math.floor(Date.now() / 5000);
var vari_list = [1, 2, 0, -1, -2];
var variation = vari_list[time_seed % 5]; 

var active_now;
if (seed == 0) {
  active_now = 33 + variation; // Range: 31 - 35
} else if (seed == 1) {
  active_now = 51 + variation; // Range: 49 - 53
} else {
  active_now = 23 + variation; // Range: 21 - 25
}

// ၄။ Status Card ပို့ခြင်း
var status_card = 
  "📊 <b>အထန်မ BOT တိုးတက်မှု အခြေအနေ</b>\n" +
  "━━━━━━━━━━━━━━━━━━━━\n\n" +
  "👥 <b>စုစုပေါင်းအဖွဲ့ဝင် •</b> <code>" + total_members + " ယောက်</code>\n" +
  "🟢 <b>Active Now •</b> <code>" + active_now + " ယောက်</code>\n" +
  "💎 <b>VIP Member •</b> <code>" + vip_members + " ယောက်</code>\n\n" +
  "✨ <i>မောင်လေး... မမတို့ဆီမှာ အခုလဲ လူတွေအများကြီး အာသာဖြေနေကြတယ်နော်။</i>\n\n" +
  "━━━━━━━━━━━━━━━━━━━━\n" +
  "🔥 <b>" + reacts + "</b> Reacts  •  👁️ <b>" + views + "</b> Views";

Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "AgACAgUAAxkBAAIBVmmiQ6o9_Vci2bNi3J-tDQJnH3wAA6cSaxsm6BFVw0J9wDdSTxMBAAMCAAN4AAM6BA",
  caption: status_card,
  parse_mode: "HTML",
  protect_content: true,
  reply_markup: {
    inline_keyboard: [
      [{ text: "💎 VIP Member ဝင်မည်", callback_data: "/vip_details" }],
      [{ text: "🏠 ပင်မစာမျက်နှာသို့", callback_data: "/start" }]
    ]
  }
});

