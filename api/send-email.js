import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ykkumawat2022@gmail.com',
        pass: 'PassworD@1234',  // Make sure this is the correct app password if 2FA is enabled
    },
});

const mailOptions = {
    from: 'ykkumawat2022@gmail.com',
    to: 'recipient@example.com',  // Replace with the recipient's email
    subject: 'Test Email',
    text: 'This is a test email from Node.js.',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
