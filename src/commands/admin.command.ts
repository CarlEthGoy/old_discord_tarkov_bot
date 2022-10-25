import { MessageEmbed, TextChannel } from 'discord.js';
import { Command } from './command';

export class AdminCommand extends Command {
    
    async Execute(){
        if (this.message.author.id == process.env.ADMIN_ID){
            if (this.command == "clear-all") {
                (this.message.channel as TextChannel).bulkDelete(99);
            }
        }
        
        if (this.message.author.id == process.env.ADMIN_ID && this.message.channel.id == process.env.ADMIN_CHANNEL_ID) {
            // View all users message
            if (this.command == "view-messages") {
                var memberId = this.parameters[1];
                var memberDisplayName = "";

                await this.client.guilds.fetch(process.env.CLIENT_ID ?? '').then(async guild => {
                    await guild.members.fetch(memberId).then(member =>{
                        memberDisplayName = member.displayName;
                    });
                });

                this.client.channels.cache.forEach(channel => {
                    var allMemberMessage = "";

                    if (channel.type == "text") {
                        (channel as TextChannel).messages.fetch().then(async messages => {
                            allMemberMessage = `${allMemberMessage} \n\n Channel : ${(channel as TextChannel).name}`;
                            messages.forEach(message => {
                                if (message.author.id == memberId) {
                                    allMemberMessage = `${allMemberMessage} \n ${message.content}`;
                                }
                            });
                            const embed = new MessageEmbed()
                            .setTitle(`Logs for ${memberDisplayName} :`)
                            .setColor(0xff0000)
                            .setDescription(allMemberMessage);
                            this.message.channel.send(embed);
                        });
                    }
                });
            }
        }
    }
    
}