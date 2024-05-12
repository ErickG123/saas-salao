import nodemailer from "nodemailer";

export async function sendPasswordEmail(email: string, resetUrl: string) {
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
      subject: 'Recuperação de Senha',
      html: `Clique no link para redefinir sua senha: <a href="${resetUrl}">${resetUrl}</a>`,
    });
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
    throw error;
  }
}
