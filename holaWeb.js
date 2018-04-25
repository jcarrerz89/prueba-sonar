var restify = require('restify');
var builder = require('botbuilder');

// levantar server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3979, function() {
    console.log('%s listening to %s', server.name, server.url);
});

var connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
});

// UniversalBot
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen() );

bot.dialog('/', [
    function(session) {
        console.log("inicio***** ", session.message.text);
        //session.send("Hola ctm");
        builder.Prompts.text(session, "como te llamas?");
    },

    function(session, results){
        let msj = results.response;
        session.send(`Hola ${msj}!`);
    }

]);