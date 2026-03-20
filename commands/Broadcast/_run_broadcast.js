/*CMD
  command: /run_broadcast
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Broadcast

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /run_broadcast
  need_reply: false
CMD*/

var status = Bot.getProperty("BC_STATUS");
if (status == "stopped") { return; }

var db_name = Bot.getProperty("BC_CURRENT_DB");
var list = Bot.getProperty(db_name) || [];
var index = Bot.getProperty("BC_INDEX", 0);

// လက်ရှိ DB ထဲမှာ လူကုန်သွားရင်...
if (index >= list.length) {
  // DB 1 (USER_LIST) ကုန်သွားရင် DB 2 (USER_LIST_2) ကို ပြောင်းမယ်
  if (db_name == "USER_LIST") {
    Bot.setProperty("BC_CURRENT_DB", "USER_LIST_2", "string");
    Bot.setProperty("BC_INDEX", 0, "integer");
    Bot.sendMessage("📦 DB 1 ပြီးပါပြီ။ DB 2 ကို ဆက်လက်ပို့ဆောင်နေပါတယ်ရှင်...");
    Bot.run({ command: "/run_broadcast", run_after: 1 });
    return;
  } else {
    Bot.sendMessage("✅ သခင်... DB အားလုံးကို Broadcast ပို့လို့ ပြီးသွားပါပြီရှင်။");
    return;
  }
}

var target_id = list[index];
var photo = User.getProperty("bc_photo");
var text = User.getProperty("bc_text");
var btn_name = User.getProperty("bc_btn_name");
var btn_link = User.getProperty("bc_btn_link");

var inline_kb = [[{ text: btn_name, url: btn_link }]];

// Message ပို့ခြင်း
if (photo) {
  Api.sendPhoto({
    chat_id: target_id,
    photo: photo,
    caption: text,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: inline_kb },
    on_error: "/bc_error"
  });
} else {
  Api.sendMessage({
    chat_id: target_id,
    text: text,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: inline_kb },
    on_error: "/bc_error"
  });
}

// Next index
Bot.setProperty("BC_INDEX", index + 1, "integer");
Bot.run({ command: "/run_broadcast", run_after: 0.6 });

