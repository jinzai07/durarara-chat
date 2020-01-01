export class User {
    email: string;
    password: string;
    displayName: string;
    color: any;

    constructor(email, password, displayName, color) {
        this.email = email;
        this.password = password;
        this.displayName = displayName;
        this.color = color;
    }
}