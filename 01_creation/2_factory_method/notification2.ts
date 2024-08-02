export interface Notification {
  send(): void;
}

class EmailNotification implements Notification {
  private recipient: string;
  private message: string;

  constructor(recipient: string, message: string) {
    this.recipient = recipient;
    this.message = message;
  }

  send(): void {
    console.log(`Sending email to ${this.recipient}: ${this.message}`);
  }

  getEmailAddress(): string {
    return this.recipient;
  }
}
