/*CMD
  command: /add_free
  help: 
  need_reply: true
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
  command: /add_free
  need_reply: true
  admin: true
CMD*/

if (message == "stop" || message == "တော်ပြီ") { 
  Bot.sendMessage("🛑 <b>Photo သိမ်းတာ ရပ်လိုက်ပါပြီ Master။</b>", { parse_mode: "HTML" }); 
  return; 
}

var rec = null;
if (request.photo) { 
  rec = { type: "photo", file_id: request.photo[request.photo.length - 1].file_id }; 
} else if (request.video || request.animation || request.document) { 
  rec = { type: "video", file_id: (request.video || request.animation || request.document).file_id }; 
}

if (!rec) { 
  Bot.sendMessage("⚠️ <b>Media (ပုံ သို့မဟုတ် ဗီဒီယို) ပို့ပေးပါ ကိုကို။</b>", { parse_mode: "HTML" }); 
  Bot.runCommand("/add_free"); 
  return; 
}

// ၁။ DB နှစ်ခုလုံးကို ဆွဲထုတ်မယ်
var db1 = Bot.getProperty("DB_FREE_PHOTO1") || [];
var db2 = Bot.getProperty("DB_FREE_PHOTO2") || [];

// ၂။ DB-1 မှာ ၅၀၀ မပြည့်သေးရင် DB-1 ထဲထည့်မယ်၊ ပြည့်ရင် DB-2 ထဲထည့်မယ်
if (db1.length < 140) {
  db1.push(rec);
  Bot.setProperty("DB_FREE_PHOTO1", db1, "json");
} else {
  db2.push(rec);
  Bot.setProperty("DB_FREE_PHOTO2", db2, "json");
}

var total = (Bot.getProperty("DB_FREE_PHOTO1") || []).length + (Bot.getProperty("DB_FREE_PHOTO2") || []).length;

Bot.sendMessage("✅ <b>Profile ပုံ သိမ်းပြီးပါပြီ။</b>\n📊 DB1: " + (Bot.getProperty("DB_FREE_PHOTO1") || []).length + " | DB2: " + (Bot.getProperty("DB_FREE_PHOTO2") || []).length + "\n📈 စုစုပေါင်း: <b>" + total + "</b>\n\n<i>ဆက်ပို့ပါ သို့မဟုတ် 'stop' ဟုရိုက်ပါ။</i>", { parse_mode: "HTML" });

Bot.runCommand("/add_free");

