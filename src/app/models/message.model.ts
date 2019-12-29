export class Message {
    message: string;
    timeStamp: Date;
    displayName?: string;

    constructor(message, timeStamp, displayName) {
        this.message = message;
        this.timeStamp = timeStamp;
        this.displayName = displayName;
    }
}