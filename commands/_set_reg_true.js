/*CMD
  command: /set_reg_true
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
  command: /set_reg_true
  need_reply: false
CMD*/

if (!options) { return; }
var target_id = options.tg_id;

// သက်ဆိုင်ရာ User ID ရဲ့ Profile မှာ Register လုပ်ပြီးသားအဖြစ် မှတ်မယ်
User.setProperty({
  name: "is_registered",
  value: true,
  type: "boolean",
  user_id: target_id
});

