const Command = require("../../modules/Command.js");

class Say extends Command {
  constructor(client) {
    super(client, {
      name: "say",
      description: "Dire des trucs.",
      usage: "say",
      category: "Système",
     permLevel: "Blabla Boss",
     aliases: ["s"]
    });
  }

  async run(message, args) {
    try {
      message.channel.bulkDelete(1).then(() => {
        message.channel
          .send(args.join(' '));
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Say;
