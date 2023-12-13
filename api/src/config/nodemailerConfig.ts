import nodemailer from "nodemailer";
import configServer from "./configServer";

export const transporter = nodemailer.createTransport({
    host: configServer.mailer.host,
    port: 465,
    secure: true,
    auth: {
        user: configServer.mailer.user,
        pass: configServer.mailer.app_password,
    }
});