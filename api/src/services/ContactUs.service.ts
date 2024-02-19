import configServer from "../config/configServer";
import { transporter } from "../config/nodemailerConfig";
import BadRequestException from "../errors/BadRequestException";
import { ContactUsDB, ContactUsBody } from "../interfaces/Emails.interface";
import ContactUsModel from "../models/ContactUs.model";

class ContactUs {
    private collection;
    private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    constructor() { 
        this.collection = ContactUsModel
    }

    send = async (body: ContactUsBody) => {
        const { name, email, phone, subject, message } = body;

        if ([name, email, phone, subject, message].includes("")) throw new BadRequestException('Fields cannot be empty')
        
        if (!this.emailRegex.test(email)) throw new BadRequestException('Invalid email');

        const findCustomerInDB = await this.collection.findOne({ email });

        const emailInfo = await transporter.sendMail({
            from: email,
            to: configServer.mailer.user,
            subject,
            sender: email,
            replyTo: email,
            html: `
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">
            <div style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; background-color: #fff;">
                <h1 style="color: #333;">Datos del cliente</h1>
                <p><strong>Nombre y apellido:</strong> ${name}</p>
                <p><strong>Teléfono:</strong> ${phone}</p>
                <p><strong>Correo electrónico:</strong> ${email}</p>
            </div>
        </div>
        <div>
            <h2>Mensaje:</h2>
            <p>${message}</p>
        </div>
            `
        });

        if (!findCustomerInDB) {
            const saveEmailInDB: ContactUsDB = {
                name,
                email,
                phone,
                subject,
                message,
                status: emailInfo.response
            }
            await this.collection.create(saveEmailInDB);
        }
    };
};

const contactUs = new ContactUs();
export default contactUs;