import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, number, message, i_am_interested_in, company_name } = data;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sunbrilotechnologies.digital@gmail.com',
        pass: 'ezdn qmdl vicl lfqa',
      },
    });

    // Email options
    const mailOptions = {
      from: 'sunbrilotechnologies.digital@gmail.com',
      to: 'sunbrilotechnologies.digital@gmail.com',
      cc: ['sales@sunbrilotechnologies.com', 'info@sunbrilotechnologies.com'],
      replyTo: email,
      subject: `New Lead: ${name} - ${i_am_interested_in}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${number}</p>
        ${company_name ? `<p><strong>Company Name:</strong> ${company_name}</p>` : ''}
        <p><strong>Interested In:</strong> ${i_am_interested_in}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

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
