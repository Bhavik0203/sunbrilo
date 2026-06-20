import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const job = formData.get('job');
    const fullName = formData.get('fullName');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const message = formData.get('message');
    const resume = formData.get('resume') as File | null;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sunbrilotechnologies.digital@gmail.com',
        pass: 'ezdn qmdl vicl lfqa',
      },
    });

    const mailOptions: any = {
      from: 'sunbrilotechnologies.digital@gmail.com',
      to: 'sunbrilotechnologies.digital@gmail.com',
      cc: ['recruitment@sunbrilotechnologies.com', 'Prajakta.Kale@sunbrilotechnologies.com'],
      replyTo: email ? email.toString() : undefined,
      subject: `New Career Application: ${fullName} - ${job}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${job}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      mailOptions.attachments = [
        {
          filename: resume.name,
          content: buffer,
          contentType: resume.type,
        },
      ];
    }

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}
