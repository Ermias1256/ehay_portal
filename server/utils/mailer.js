import nodemailer from "nodemailer";
import googleapis from "googleapis";
const { google } = googleapis;

import dotenv from "dotenv";
dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const APP_EMAIL = process.env.APP_EMAIL;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

export const sendMailFromGmail = async (to, subject, text) => {
  try {
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: APP_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "App Admin",
      to: to,
      subject: subject,
      text: text,
      html: text,
    };

    const result = await transport.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

export const sendMailFromOutlook = async (to, subject, text) => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // hostname
      port: 587, // port for secure SMTP
      auth: {
        user: APP_EMAIL,
        pass: APP_EMAIL_PASS,
      },

      logger: true,
      debug: true,
    });

    const mailOptions = {
      from: "System Admin",
      to: to,
      subject: subject,
      text: text,
      html: `<p>${text}</p>`,
    };

    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Sent: " & info.messageId);
    });
  } catch (error) {
    console.log(error);
  }

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
};
