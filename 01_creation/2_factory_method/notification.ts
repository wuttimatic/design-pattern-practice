// Notification follows the Factory Method pattern

export interface Notification {
    send(message: string): void;
}

export class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Email notification: ${message}`);
    }
}

export class SMSNotification implements Notification {
    send(message: string): void {
        console.log(`SMS notification: ${message}`);
    }
}

export class PushNotification implements Notification {
    send(message: string): void {
        console.log(`Push notification: ${message}`);
    }
}

export enum NotificationType {
    EMAIL,
    SMS,
    PUSH
}

export class NotificationFactory {
    createNotification(type: NotificationType): Notification {
        switch (type) {
            case NotificationType.EMAIL:
                return new EmailNotification();
            case NotificationType.SMS:
                return new SMSNotification();
            case NotificationType.PUSH:
                return new PushNotification();
            default:
                throw new Error('Invalid notification type');
        }
    }
}

// Usage
const factory = new NotificationFactory();
const emailNotification = factory.createNotification(NotificationType.EMAIL);
emailNotification.send('Welcome to our platform!');

// Q: What if we want to add a new notification type?
// A: We can create a new class that implements the Notification interface and update the NotificationFactory class to support the new type.
// Q: What if we want to customize the behavior of a specific notification type?
// A: We can create a subclass of the corresponding notification class and override the send method to add custom behavior.
// Q: Assuming we want to send multiple notifications at once, how can we achieve that, with real life example? How can we pass email address to EmailNotification,
// phone number to SMSNotification, and device token to PushNotification?
// A: We can modify the send method to accept additional parameters (e.g., email address, phone number, device token) and use them to send the notification to the correct recipient.
// Q: Give me an example of how to send method to accept additional parameters (e.g., email address, phone number, device token) and use them to send the notification to the correct recipient.


// create class that can send method to accept additional parameters (e.g., email address, phone number, device token) and use them to send the notification to the correct recipient.
// export class EmailNotification2 implements Notification {
//     send(message: string, emailAddress: string): void {
//         console.log(`Email notification: ${message} to ${emailAddress}`);
//     }
// }
