import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { latitude, longitude, email } = req.body;

        // Configure nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ykkumawat2022@gmail.com', // Replace with your email
                pass: 'PassworD@1234',   // Replace with app-specific password
            },
        });

        const mailOptions = {
            from: 'ykkumawat2022@gmail.com',
            to: email,
            subject: 'Location Data Received',
            text: `User's location data:\nLatitude: ${latitude}\nLongitude: ${longitude}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to send email.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
