/*CMD
  command: /get_text
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
  command: /get_text
  need_reply: true
CMD*/

User.setProperty("bc_text", message, "string");

Bot.sendMessage("🔗 **Button Name** နဲ့ **Link** ကို အခုလို ပုံစံအတိုင်း ပို့ပေးပါရှင်။\n\nပုံစံ - `Button အမည် | https://example.com` ");
Bot.run({ command: "/start_bc_process" });

