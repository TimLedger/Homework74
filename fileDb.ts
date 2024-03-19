import {promises as fs} from "fs";
import {Message} from "./types";

const fileName = "./messages";

const fileDb = {
    async getItems () {
        const files = await fs.readdir(fileName);
        return await Promise.all(
            files.map(async file => {
                const messageFile = await fs.readFile(fileName + '/' + file);
                return JSON.parse(messageFile.toString());
            })
        );
    },
    async addItem (item: Message) {
        const dateTime = new Date().toISOString();
        const message: Message = {
            message: item.message,
            time: dateTime,
        };
        await fs.writeFile(fileName + '/' + dateTime + '.txt', JSON.stringify(message));
        return message;
    },
};

export default fileDb;