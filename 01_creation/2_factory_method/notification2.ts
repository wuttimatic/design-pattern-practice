interface Notification {
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
}

class SMSNotification implements Notification {
  private recipient: string;
  private message: string;

  constructor(recipient: string, message: string) {
    this.recipient = recipient;
    this.message = message;
  }

  send(): void {
    console.log(`Sending SMS to ${this.recipient}: ${this.message}`);
  }
}
