/*CMD
  command: /get_photo
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
  command: /get_photo
  need_reply: true
CMD*/

if (request.photo) {
  var photo_id = request.photo[request.photo.length - 1].file_id;
  User.setProperty("bc_photo", photo_id, "string");
} else {
  User.setProperty("bc_photo", null);
}

Bot.sendMessage("✍️ အိုကေ... အခု **ပို့ချင်တဲ့စာ** ကို ရိုက်ပေးပါရှင်။\n(HTML mode သုံးလို့ရပါတယ်)");
Bot.run({ command: "/get_text" });

