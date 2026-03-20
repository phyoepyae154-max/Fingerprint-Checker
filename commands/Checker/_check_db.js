/*CMD
  command: /check_db
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
  command: /check_db
  need_reply: false
  admin: true
CMD*/

// ၁။ DB နှစ်ခုလုံးက Data တွေကို ဆွဲထုတ်မယ်
var db1 = Bot.getProperty("DB_FREE_PHOTO1") || [];
var db2 = Bot.getProperty("DB_FREE_PHOTO2") || [];

// ၂။ အရေအတွက် တွက်မယ်
var count1 = db1.length;
var count2 = db2.length;
var total = count1 + count2;

// ၃။ သခင့်ဆီ စာသားပို့မယ်
var msg = "📊 <b>Database Statistics</b>\n\n" +
          "📂 <b>DB_FREE_PHOTO1:</b> <code>" + count1 + "</code> ပုံ\n" +
          "📂 <b>DB_FREE_PHOTO2:</b> <code>" + count2 + "</code> ပုံ\n" +
          "━━━━━━━━━━━━━━━━━━\n" +
          "📈 <b>စုစုပေါင်း:</b> <code>" + total + "</code> <b>ပုံ ရှိပါတယ် Master။</b>";

Bot.sendMessage(msg, { parse_mode: "HTML" });

