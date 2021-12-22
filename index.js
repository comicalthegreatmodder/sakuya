//require discord.js
const Discord = require('discord.js');

//require the bot prefix
const prefix = 'iza!';

//create a new discord client
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

//when the client is ready
client.on('ready', () => {
    console.log('I am ready!');
});

// create boolean for nsfw
let nsfw = false;

//listen for messages
client.on('message', message => {
    // ignore messages that don't start with the prefix
    if (!message.content.startsWith(prefix)) return;

    //parse the message
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    //create a ping command
    if (command === 'ping') {
        message.reply('Pong!');
    }

    if (command === 'doyoulikesawcon') {
        if (message.author.id === '868298542140227685') {
            message.reply('I will not be responding to this message.');
        }
        else {
            message.channel.send('sawcon deez nu-oh wait i dont have any');
        }    
    }

    if (command === 'iloveyou') {
        if (message.author.id === '868298542140227685') {
            message.reply('I love you, and only you, ' + message.author.username + '!');
        }
        else {
            message.reply('I only love @Mchiic. I do not love you.');
        }
    }

    if (command === 'creator') {
        message.reply('ComicalGuy created me, and Mchiic loved me. But I love him. And no one else.');
    }

    if (command === 'troll') {
        message.reply('https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png');
    }
    if (command === 'joejoehehe') {
        message.reply('https://media3.giphy.com/media/QyDHI3LJx8I9hA51Qs/200w.webp?cid=ecf05e47jwnm2q60mpv81qxrvjm9htbdauwjp1zu99mj3lw7&rid=200w.webp&ct=g');
    }

    if (message.author.id === '868298542140227685') {
        message.reply('𝘮𝘰𝘢𝘯𝘴');
    }
    else {
        message.reply('you are forbidden to use this command. 𝘱𝘶𝘯𝘤𝘩𝘦𝘴');
    }

    //create an image command
    if (command === 'sakuyaimage') {
        message.reply('https://images.app.goo.gl/5Fzq9VzL7XWbX5sF6');
    }

    if (command === 'help') {
        message.reply('Here is a list of commands: \n' +
            'ping - replies with pong \n' +
            'doyoulikesawcon - replies with smart clever reply \n' +
            'iloveyou - only for one person \n' +
            'creator - shows the contributions to the bot \n' +
            'troll - you get trolled \n' +
            'forbidden - never should be used unless you are @Mchiic \n' +
            'joejoehehe \n' +
            'help - this message'
        );
    }    
});


//login
client.login(process.env.token);