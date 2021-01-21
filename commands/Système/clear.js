const Command = require("../../modules/Command.js");

class Clear extends Command {
  constructor(client) {
    super(client, {
      name: "clear",
      description: "Nettoyer un nombre de messages spécifiés.",
      usage: "clear",
      category: "Système",
      permLevel: "Blabla Boss"
    });
  }

  async run(message, args) {
    try {
      message.channel.bulkDelete(parseInt(args[0]) + 1).then(() => {
        message.channel
          .send(`J'ai supprimé ***${args[0]} messages*** pour vous !`)
          .then(message => message.delete(5000));
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Clear;
