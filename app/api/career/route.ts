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
    const coverLetter = formData.get('coverLetter');
    const currentCompany = formData.get('currentCompany');
    const linkedinUrl = formData.get('linkedinUrl');
    const portfolioUrl = formData.get('portfolioUrl');
    const totalExperience = formData.get('totalExperience');
    const currentSalary = formData.get('currentSalary');
    const expectedSalary = formData.get('expectedSalary');
    const noticePeriod = formData.get('noticePeriod');
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
        ${currentCompany ? `<p><strong>Current Company:</strong> ${currentCompany}</p>` : ''}
        ${totalExperience ? `<p><strong>Total Experience:</strong> ${totalExperience} years</p>` : ''}
        ${currentSalary ? `<p><strong>Current Salary:</strong> ${currentSalary}</p>` : ''}
        ${expectedSalary ? `<p><strong>Expected Salary:</strong> ${expectedSalary}</p>` : ''}
        ${noticePeriod ? `<p><strong>Notice Period:</strong> ${noticePeriod}</p>` : ''}
        ${linkedinUrl ? `<p><strong>LinkedIn Profile:</strong> <a href="${linkedinUrl}">${linkedinUrl}</a></p>` : ''}
        ${portfolioUrl ? `<p><strong>Portfolio URL:</strong> <a href="${portfolioUrl}">${portfolioUrl}</a></p>` : ''}
        ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
        ${coverLetter && coverLetter !== message ? `<p><strong>Cover Letter:</strong></p><p>${coverLetter}</p>` : ''}
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
