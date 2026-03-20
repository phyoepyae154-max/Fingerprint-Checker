/*CMD
  command: /stop_bc
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
  command: /stop_bc
  need_reply: false
CMD*/

if (user.telegramid != 1981611974) { return; }
Bot.setProperty("BC_STATUS", "stopped", "string");
Bot.sendMessage("⏳ Broadcast ကို ရပ်ဖို့ အချက်ပေးလိုက်ပါပြီ။");

