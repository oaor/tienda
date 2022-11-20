const nodemailer= require("nodemailer")

// correo de salida para enviar los mensajes
const sendEmail = async option =>{
    const transporte= nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "rpinzon196@outlook.com",
            pass: "7cfc9c007a4731"
        }
    });

    const mensaje={
        from: "UmbrellaSoft <rpinzon196@outlook.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;
