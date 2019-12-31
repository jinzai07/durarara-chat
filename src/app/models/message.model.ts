export class Message {
    message: string;
    timeStamp: string;
    displayName?: string;
    chatroomName: string;

    constructor(message, timeStamp, displayName, chatroomName) {
        this.message = message;
        this.timeStamp = timeStamp;
        this.displayName = displayName;
        this.chatroomName = chatroomName;
    }
}