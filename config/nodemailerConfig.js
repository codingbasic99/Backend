import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.MAILTRAP_USERNAME);

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "36c39294af5cbd",
    pass: "4a6b75102c2348",
  },
});

export default transport;
