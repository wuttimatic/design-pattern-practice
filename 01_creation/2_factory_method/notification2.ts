interface Notification {
  send(): void;
  display(): void;
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

  display(): void {
    console.log(`Displaying email to ${this.recipient}: ${this.message}`);
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

  display(): void {
    console.log(`Displaying SMS to ${this.recipient}: ${this.message}`);
  }
}
