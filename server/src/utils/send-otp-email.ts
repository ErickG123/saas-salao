import nodemailer from "nodemailer";

export async function sendActivationEmail(email: string, otpCode: string): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "erickgabrielalves0@gmail.com",
      pass: "xcqsupnsocbemuvl",
    },
  });

  try {
    await transporter.sendMail({
      from: "erickgabrielalves0@gmail.com",
      to: email,
      subject: "Ative sua conta",
      text: `Seu código de ativação é: ${otpCode}`,
    });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    throw error; // Rejeite o erro para que ele seja tratado no ponto de chamada
  }
}
