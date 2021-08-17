export interface Adress {
  name: string;
  email: string;
}

export interface Message {
  to: Adress;
  from: Adress;
  subject: string;
  body: string;
}

export interface MailProvider {
  sendMail(message: Message): Promise<void>;
}
