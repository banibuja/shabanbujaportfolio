const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();  

const app = express();
app.use(cors({
  origin: ["http://localhost:3000", "https://shabanbujaportfolio.onrender.com", "https://banibuja.github.io", "https://shabanbuja.info", "https://www.shabanbuja.info"],
  methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));
app.use(bodyParser.json());



app.post('/send', (req, res) => {
  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, 
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
