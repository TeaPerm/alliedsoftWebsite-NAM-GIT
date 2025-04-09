import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const formData = await req.json();

    if (!formData.fullName || !formData.email || !formData.message || !formData.company || !formData.phone) {
      return Response.json({ error: "Missing data" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `AlliedSoft Weboldal - Új üzenet: ${formData.fullName}`,
      html: `
        <h2>Új üzenet érkezett az AlliedSoft weboldalról:</h2>
        <p><strong>Cég:</strong> ${formData.company}</p>
        <p><strong>Teljes név:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Telefonszám:</strong> ${formData.phone}</p>
        <p><strong>Üzenet:</strong> ${formData.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    
    return Response.json({ error: "Email sent" }, { status: 200 });
} catch (error) {
    return Response.json({ error: "Error sending email." }, { status: 500 });
  }
}
