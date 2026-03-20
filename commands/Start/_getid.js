/*CMD
  command: /getid
  help: 
  need_reply: true
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
  command: /getid
  need_reply: true
  help: Send a photo or video; I’ll reply with the file_id. (Send next media again for next id)
  folder: tools
CMD*/

function reply(html){
  Api.sendMessage({ parse_mode: "HTML", text: html });
}
function largestPhotoId(sizes){
  return sizes[sizes.length - 1].file_id; // biggest size
}

if (request){
  // Albums (media groups) can be tricky — ask for single item
  if (request.media_group_id){
    reply("⚠️ Album (multi-media) တွေမဟုတ်ဘဲ ပုံ/ဗီဒီယိုကို တစ်ခုချင်းပို့ပါနော် 🙏");
    Bot.runCommand("/getid");
    return;
  }

  // 1) Normal video
  if (request.video){
    reply("🎥 <b>Video file_id:</b>\n<code>" + request.video.file_id + "</code>");
    Bot.runCommand("/getid");
    return;
  }

  // 2) Video sent as a Document (e.g. 1080p mp4 uploaded as file)
  if (request.document && request.document.mime_type && request.document.mime_type.indexOf("video") === 0){
    reply("📄🎥 <b>Video-as-Document file_id:</b>\n<code>" + request.document.file_id + "</code>");
    Bot.runCommand("/getid");
    return;
  }

  // 3) GIF/animation (Telegram ‘animation’ type)
  if (request.animation){
    reply("🎞 <b>GIF/Animation file_id:</b>\n<code>" + request.animation.file_id + "</code>");
    Bot.runCommand("/getid");
    return;
  }

  // 4) Round video note
  if (request.video_note){
    reply("🟠 <b>Video Note file_id:</b>\n<code>" + request.video_note.file_id + "</code>");
    Bot.runCommand("/getid");
    return;
  }

  // 5) Photo
  if (request.photo){
    var fid = largestPhotoId(request.photo);
    reply("🖼 <b>Photo file_id:</b>\n<code>" + fid + "</code>");
    Bot.runCommand("/getid");
    return;
  }
}

// Fallback (unknown payload)
var ct = (request && request.content_type) ? request.content_type : "unknown";
reply("❓ အမျိုးအစားမသိတဲ့ message ပါ — <code>" + ct + "</code>\n\n" +
      "📌 နည်းလမ်း:\n" +
      "• Normal video (gallery မှာ ‘video’ အဖြစ်)\n" +
      "• သို့မဟုတ် mp4 ကို Document အဖြစ်ပို့ပါ\n" +
      "• Album မဟုတ်တစ်ခုချင်းပို့ပါ");
