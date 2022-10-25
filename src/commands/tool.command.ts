import { MessageEmbed } from 'discord.js';
import { Command } from './command';

export class ToolCommand extends Command {
    
    async Execute(){
        if (this.message.channel.id == process.env.TARKOV_HELPER_CHANNEL_ID) {
            // MapGenie
            if (this.command.includes("map") || this.command.includes("genie")) {
                const embed = new MessageEmbed()
                .setTitle(`Lien pour MapGenie:`)
                .setColor(0xff00ff)
                .setDescription('https://mapgenie.io/tarkov');
                this.message.channel.send(embed);
            }

            // Tarkov tools
            if (this.command.includes("tool")) {
                const embed = new MessageEmbed()
                .setTitle(`Lien pour TarkovTools:`)
                .setColor(0xff00ff)
                .setDescription('https://tarkov-tools.com/');
                this.message.channel.send(embed);
            }

            //Quest items to find in raid
            if (this.command.includes('quest') || this.command.includes('items') || this.command.includes('keep') || this.command.includes('items-to-keep')){
                this.message.channel.send("Items to find in raid", { files:["./images/QuestItemsInRaid.png"] });
            }
        }
    }
    
}