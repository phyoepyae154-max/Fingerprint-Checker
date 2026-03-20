/*CMD
  command: /start_bc_process
  help: 
  need_reply: true
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
  command: /start_bc_process
  need_reply: true
CMD*/

if (!message.includes("|")) {
  Bot.sendMessage("❌ ပုံစံမှားနေတယ် ကိုကို။ `အမည် | Link` ပုံစံအတိုင်း ပြန်ပို့ပေးပါ။");
  Bot.run({ command: "/start_bc_process" });
  return;
}

var parts = message.split("|");
User.setProperty("bc_btn_name", parts[0].trim(), "string");
User.setProperty("bc_btn_link", parts[1].trim(), "string");

// အဆင့် (၁) - DB 1 ကို အရင်စပို့မယ်
Bot.setProperty("BC_CURRENT_DB", "USER_LIST", "string");
Bot.setProperty("BC_INDEX", 0, "integer");
Bot.setProperty("BC_STATUS", "running", "string");

Bot.sendMessage("🚀 Broadcast စတင်နေပါပြီ... DB 1 ကနေ စတင်ပို့ဆောင်နေပါတယ်ရှင်။");

Bot.run({ command: "/run_broadcast" });

