interface Notification {
  display(): void;
}

class EmailNotification implements Notification {
  private recipient: string;
  private message: string;

  constructor(recipient: string, message: string) {
    this.recipient = recipient;
    this.message = message;
  }

  display(): void {
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

  display(): void {
    console.log(`Sending SMS to ${this.recipient}: ${this.message}`);
  }
}

class NotificationFactory {
  public static createNotification(type: string, recipient: string, message: string): Notification {
    switch (type) {
      case 'email':
        return new EmailNotification(recipient, message);
      case 'sms':
        return new SMSNotification(recipient, message);
      default:
        throw new Error('Invalid notification type');
    }
  }
}
