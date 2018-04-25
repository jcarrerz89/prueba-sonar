var Builder = require('botbuilder');

var connector = new Builder.ConsoleConnector().listen();
var bot = new Builder.UniversalBot(connector);

bot.dialog('/', [
    function(session){
        session.send("Hola mundo");
    }
]);