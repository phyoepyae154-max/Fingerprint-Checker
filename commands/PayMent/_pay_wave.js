/*CMD
  command: /pay_wave
  help: 
  need_reply: false
  auto_retry_time: 
  folder: PayMent

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /pay_wave
  need_reply: false
  folder: chatvip
CMD*/

// 🧹 အမှိုက်ရှင်းမယ်
Bot.runCommand("/_cleanup_tmp");

// ===== Payment Info (စျေးနှုန်းကို ၃၀,၀၀၀ ပြင်ထားသည်) =====
var caption =
  "💳 <b>WavePay ဖြင့် ငွေပေးချေခြင်း</b>\n" +
  "━━━━━━━━━━━━━━━━━━━━\n\n" +
  "👤 <b>နာမည်:</b> Ma Htwe\n" +
  "📞 <b>ဖုန်းနံပါတ်:</b> <code>09695034457</code>\n\n" +
  "💰 <b>VIP ဝင်ကြေး:</b> <b>၃၀,၀၀၀ MMK</b>\n\n" +
  "⚠️ <b>အရေးကြီးချက်:</b>\n" +
  "ငွေလွှဲပြီးလျှင် <b>ပြေစာ (Screenshot)</b> ကို အောက်ကခလုတ်မှတစ်ဆင့် ပေးပို့ပေးပါနော် 💕\n\n" +
  "🎧 <b>Admin Service:</b>\n" +
  "╰┈➤ Admin မမများမှ ၂၄ နာရီလုံး စစ်ဆေးပေးနေပြီး တစ်စုံတစ်ရာ အဆင်မပြေပါက ငွေပြန်အမ်းပေးဖို့ အာမခံပါတယ်ရှင် 🛡️\n";

// ===== Keyboard =====
var keyboard = {
  inline_keyboard: [
    [
      { text: "📸 ပြေစာ (Screenshot) ပေးပို့မယ်", callback_data: "/upload_screenshot" }
    ],
    [
      { text: "⬅️ နောက်သို့", callback_data: "/pay" }
    ]
  ]
};

// ===== Send Photo (WavePay Logo) =====
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://i.ibb.co/7dRwDhg3/ad05b74cd5f80b55498d98a21368e43e-fgraphic.png",
  caption: caption,
  parse_mode: "HTML",
  reply_markup: keyboard,
  on_result: "/_remember_tmp"
});

