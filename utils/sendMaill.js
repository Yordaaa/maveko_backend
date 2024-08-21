import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const sendMail = async (options) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'stmp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.USER,
            pass: process.env.APP_PASSWORD
        }
    });

    const message = {
        from: {
            name: 'Maveko Market Place',
            address: process.env.USER // sender's email address
        },
        to: options.email,
        subject: options.subject,
        html: options.message
    };

    await transport.sendMail(message);
};
