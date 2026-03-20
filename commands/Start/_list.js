/*CMD
  command: /list
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /list_girls
  admin: true
CMD*/

var db1 = Bot.getProperty("DB_FREE_TEXT1") || [];
var db2 = Bot.getProperty("DB_FREE_TEXT2") || [];

var total = db1.length + db2.length;

if (total === 0) {
  return Bot.sendMessage("⚠️ DB နှစ်ခုလုံး ပြောင်သလင်းခါနေတယ် ကိုကို။");
}

var msg = "📊 <b>လက်ရှိ Profile အခြေအနေ</b>\n";
msg += "━━━━━━━━━━━━━━━━━━━━\n";
msg += "1️⃣ Main DB: <code>" + db1.length + "</code> ခု\n";
msg += "2️⃣ Backup DB: <code>" + db2.length + "</code> ခု\n\n";
msg += "🗑️ တစ်ယောက်ချင်းစီဖျက်ရန်: <code>/del_girl [ID]</code>";

Bot.sendMessage(msg, { parse_mode: "HTML" });

