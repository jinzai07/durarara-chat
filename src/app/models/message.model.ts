export class Message {
    message: string;
    timeStamp: Date;
    displayName?: string;
    chatroom: string;

    constructor(message, timeStamp, displayName, chatroom) {
        this.message = message;
        this.timeStamp = timeStamp;
        this.displayName = displayName;
        this.chatroom = chatroom;
    }
}