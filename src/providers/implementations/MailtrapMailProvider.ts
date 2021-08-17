import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { MailProvider, Message } from '../MailProvider';

export class MailtrapMailProvider implements MailProvider {
	private transporter: Mail;

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: 'smtp.mailtrap.io',
			port: 2525,
			auth: {
				user: '5056fb22a1a0da',
				pass: '2a2a78593d84d2',
			},
		});
	}

	async sendMail(message: Message): Promise<void> {
		await this.transporter.sendMail({
			to: {
				name: message.to.name,
				address: message.to.email,
			},
			from: {
				name: message.from.name,
				address: message.from.email,
			},
			subject: message.subject,
			html: message.body,
		});
	}
}
