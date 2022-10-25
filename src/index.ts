import { Client } from 'discord.js';
import { AdminCommand } from './commands/admin.command';
import { AmmunitionCommand } from './commands/ammunition.command';
import { ToolCommand } from './commands/tool.command';

require('dotenv').config();

const client = new Client();
client.once('ready', () => {
    console.log('Ready to roll!');
});

// Everytime a user post a message this command will be executed
client.on('message', async (message) => {
    // Every command should start with !! followed by the parameters
    if (message.content.substring(0, 2) == process.env.PREFIX) {
        var parameters = message.content.substring(2).split(' ');
        var command = parameters[0].toLowerCase();

        var adminCommand = new AdminCommand(message, command, parameters, client);
        var ammunitionCommand = new AmmunitionCommand(message, command, parameters, client);
        var toolCommand = new ToolCommand(message, command, parameters, client);

        adminCommand.Execute();
        ammunitionCommand.Execute();
        toolCommand.Execute();
    }
});

client.login(process.env.TOKEN);