import { Command } from './command';

export class AmmunitionCommand extends Command {
    
    async Execute(){
        if (this.message.channel.id == process.env.TARKOV_HELPER_CHANNEL_ID) {

            if (this.command.includes('.366')){
                this.message.channel.send(".366", { files:["./images/.366-ammo.png"] });
            }

            if (this.command.includes('4.6x30') || this.command.includes('mp7')){
                this.message.channel.send("4.6x30 - mp7", { files:["./images/4.6x30-ammo.png"] });
            }

            if (this.command.includes('5.7x28') || this.command.includes('p90')){
                this.message.channel.send("5.7x28 - p90", { files:["./images/5.7x28-ammo.png"] });
            }

            if (this.command.includes('5.45x39') || this.command.includes('ak')){
                this.message.channel.send("5.45x39 - ak", { files:["./images/5.45x39-ammo.png"] });
            }

            if (this.command.includes('7.62x39') || this.command.includes('ak')){
                this.message.channel.send("7.62x39 - ak", { files:["./images/7.62x39-ammo.png"] });
            }

            if (this.command.includes('5.56x45') || this.command.includes('m4') || this.command.includes('hk')){
                this.message.channel.send("5.56x45 - m4 - hk", { files:["./images/5.56x45-ammo.png"] });
            }

            if (this.command.includes('7.62x51') || this.command.includes('m80') || this.command.includes('m61') || this.command.includes('m62') || this.command.includes('hunter') || this.command.includes('m1a')){
                this.message.channel.send("7.62x51 - m80 - m61 - m62 - hunter - m1a", { files:["./images/7.62x51-ammo.png"] });
            }

            if (this.command.includes('7.62x54') || this.command.includes('mosin') || this.command.includes('snipe') || this.command.includes('svd')){
                this.message.channel.send("7.62x54 - mosin - snipe - svd", { files:["./images/7.62x54r-ammo.png"] });
            }

            if (this.command.includes('9x19') || this.command.includes('mp5') || this.command.includes('pp') || this.command.includes('pistol')){
                this.message.channel.send("9x19 - mp5 - pistol", { files:["./images/9x19-ammo.png"] });
            }

            if (this.command.includes('val') || this.command.includes('vss') || this.command.includes('9x39')){
                this.message.channel.send("9x39 - val - vss", { files:["./images/9x39-ammo.png"] });
            }
            
            if (this.command.includes('12.7x55') || this.command.includes('ash')){
                this.message.channel.send("12.7x55 - ash", { files:["./images/12.7x55ammo.png"] });
            }

            if (this.command.includes('shotgun') || this.command.includes('buckshot') || this.command.includes('slug') || this.command.includes('saiga')){
                this.message.channel.send("shotgun - buckshot - slug - saiga", { files:["./images/shotgun-ammo.png"] });
            }
        }
    }
    
}