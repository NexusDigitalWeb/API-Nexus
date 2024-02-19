export interface Emails {
  from: string;
  to: string;
  status: string
}

export interface EmailBody {
    email: string
}

export interface ContactUsDB {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status: string
};

export interface ContactUsBody {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}