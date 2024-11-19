"use server"

import nodemailer from "nodemailer"
import { Email } from "./types/email";

export async function sendMail(values : Email) {
    console.log(values);
    
    try {
        const message = `MENSAGEM`

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        const mailOptions = {
            from: "SV Soluções <>",
            to: "nascimentotalesdev@gmail.com",
            subject: "Solicitação de contato",
            html: message
        };

        await transporter.sendMail(mailOptions);

        return { message: { type: "success", data: "Email enviado com sucesso", } };
    } catch (error) {
        console.error("Aconteceu um erro inesperado", error);
        return { message: { type: "error", data: "Aconteceu um erro inesperado" } };
    }
}