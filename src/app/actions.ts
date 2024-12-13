"use server"

import nodemailer from "nodemailer"
import { Email } from "./types/email";


export async function sendMailRequestingContact(values : Email, fristName: string) {    
    try {
        const message = `
                        <table style="border-collapse: collapse; width: 100%;">
                            <tr>
                                <th style="border: 1px solid #ddd; color: #fff; padding: 10px; text-align: left; background-color: #930101;">Dados solicitados</th>
                                <th style="border: 1px solid #ddd; color: #fff; padding: 10px; text-align: left; background-color: #930101;">Dados do cliente</th>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 10px; text-align: left;">Nome</td>
                                <td style="border: 1px solid #ddd; padding: 10px; text-align: left;">${values?.name}</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 10px; text-align: left;">Email</td>
                                <td style="border: 1px solid #ddd; padding: 10px; text-align: left;">${values?.email}</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 10px; text-align: left;">Telefone</td>
                                <td style="border: 1px solid #ddd; padding: 10px; text-align: left;">${values?.phone}</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 10px; text-align: left;">Mensagem</td>
                                <td style="border: 1px solid #ddd; padding: 10px; text-align: left;">${values?.message}</td>
                            </tr>
                        </table>
        `

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            subject: `Solicitação de contato, ${fristName!}`,
            html: message
        };

        await transporter.sendMail(mailOptions);

        return { data: { type: "success", message: "Email enviado com sucesso", } };
    } catch (error) {
        console.error("Aconteceu um erro inesperado", error);
        return { data: { type: "error", message: "Aconteceu um erro inesperado" } };
    }
}