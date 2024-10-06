require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 8080;

// CORS Middleware
app.use(cors({
  origin: ["http://localhost:3000", "https://shabanbujaportfolio.onrender.com", "https://banibuja.github.io", "https://shabanbuja.info", "https://www.shabanbuja.info"],
  methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));

// Handle preflight OPTIONS requests
app.options('*', cors());

// API Route
app.post("/api/send", async (req, res) => {
  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.privateemail.com', 
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASS  
    },
  });

  console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS);


  const mailOptions = {
    from: 'shabanbuja@shabanbuja.info', 
    to: email, 
    subject: subject,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email", details: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
