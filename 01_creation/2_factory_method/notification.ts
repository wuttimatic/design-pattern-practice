export abstract class Notification {
    abstract send(message: string): void;
}

export class EmailNotification extends Notification {
    send(message) {
        console.log('Email send with message', message);
    }
}

export class SMSNotification extends Notification {
    send(message) {
        console.log('SMS send with message', message);
    }
}

export class PushNotification extends Notification {
    send(message) {
        console.log('Push send with message', message);
    }
}

type NotificationType = 'email' | 'sms' | 'push';

export class NotificationFactory {
    static create(type: NotificationType): Notification {
        switch (type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            case 'push':
                return new PushNotification();
            default:
                throw Error('Invalid notification type');
        }
    }
}

// Usage example
const email = NotificationFactory.create('email');
email.send('Hello world!');

const sms = NotificationFactory.create('sms');
sms.send('Hello world!');


const push = NotificationFactory.create('push');
push.send('Hello world!');
