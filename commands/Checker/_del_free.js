/*CMD
  command: /del_free
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
  command: /del_free
  need_reply: false
  admin: true
CMD*/

// သခင် ရိုက်လိုက်တဲ့ စာသားကို ခွဲထုတ်မယ် (ဥပမာ: /del_free 1 10)
if (!params) {
  Bot.sendMessage("⚠️ <b>ကိုကို... ဖျက်မယ့်ပုံကို ဒီလို ရိုက်ပေးပါ။</b>\n\nပုံစံ - <code>/del_free [DBနံပါတ်] [IDနံပါတ်]</code>\nဥပမာ - <code>/del_free 1 5</code> (DB 1 ရဲ့ ၅ ခုမြောက်ပုံကို ဖျက်မယ်)", { parse_mode: "HTML" });
  return;
}

var parts = params.split(" ");
var db_num = parts[0]; // "1" သို့မဟုတ် "2"
var id_num = parseInt(parts[1]); // သခင် မြင်ရတဲ့ ID နံပါတ် (၁ ကနေ စတာ)

// DB နံပါတ်အလိုက် Property Name ကို သတ်မှတ်မယ်
var db_name = (db_num == "1") ? "DB_FREE_PHOTO1" : "DB_FREE_PHOTO2";
var current_db = Bot.getProperty(db_name) || [];

// Index က 0 ကစလို့ သခင်ပို့တဲ့ ID ထဲက ၁ နှုတ်မယ်
var index = id_num - 1;

// ၁။ အဲ့ဒီ ID ရှိမရှိ စစ်မယ်
if (index < 0 || index >= current_db.length) {
  Bot.sendMessage("❌ <b>Master... DB-" + db_num + " ထဲမှာ ID: " + id_num + " မရှိပါဘူးရှင်။</b>");
  return;
}

// ၂။ ပုံကို ဖျက်ထုတ်မယ်
current_db.splice(index, 1);

// ၃။ DB ကို ပြန်သိမ်းမယ်
Bot.setProperty(db_name, current_db, "json");

// ၄။ အောင်မြင်ကြောင်း အကြောင်းကြားမယ်
var total = (Bot.getProperty("DB_FREE_PHOTO1") || []).length + (Bot.getProperty("DB_FREE_PHOTO2") || []).length;

Bot.sendMessage("🗑️ <b>အောင်မြင်စွာ ဖျက်ပြီးပါပြီ။</b>\n\n📁 ဖျက်လိုက်သည့်နေရာ: <b>DB " + db_num + " (ID: " + id_num + ")</b>\n📈 လက်ကျန်ပုံစုစုပေါင်း: <b>" + total + "</b> ပုံ", { parse_mode: "HTML" });

