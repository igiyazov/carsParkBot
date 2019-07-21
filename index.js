const TelegramBot = require('node-telegram-bot-api');

// var tunnel = require('tunnel');

// agent: tunnel.httpsOverHttp( { proxy: { host: "proxy addr", port: 3128, headers: "add's headers for request" } } )

// replace the value below with the Telegram token you receive from @BotFather
const token = '908846312:AAG2HKkHCv54afqgCRD8pgh-q7MqKO5Oc74';

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, {
    polling: true
});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/start/, (msg) => {
    
bot.sendMessage(msg.chat.id, "Welcomen", {
"reply_markup": {
    "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
    }
});
    
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});