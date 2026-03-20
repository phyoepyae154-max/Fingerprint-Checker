/*CMD
  command: /send_noti_to_ref
  help: 
  need_reply: false
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
  command: /send_noti_to_ref
  need_reply: false
CMD*/

var target = options.target;
var msg = options.msg;

Api.sendMessage({
  chat_id: target,
  text: "<b>" + msg + "</b>",
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [[{ 
      text: "👸 အထန်မမကြည့်မယ်", 
      callback_data: "/get_free"
    }]]
  }
});

