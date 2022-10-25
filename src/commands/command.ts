import { Message, Client} from "discord.js";

export abstract class Command{
    message: Message;
    command: string;
    parameters: string[];
    client: Client;

    constructor(_message: Message, _command: string, _parameters: string[], _client: Client){
        this.message = _message;
        this.command = _command;
        this.parameters = _parameters;
        this.client = _client;
    }

    public async Execute(){}
}