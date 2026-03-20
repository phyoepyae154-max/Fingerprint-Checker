/*CMD
  command: /on_save_acc_msg
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

if (options && options.result) {
  User.setProperty("last_account_msg_id", options.result.message_id, "integer");
}

