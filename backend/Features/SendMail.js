const { default: axios } = require('axios');
require("dotenv").config();
// let CLIENT_ID = "390139244489-92v6mqj5oljo5a6iago8q8445eu35lpd.apps.googleusercontent.com"
// let CLIENT_SECRET = "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"
let CLIENT_ID = process.env.CLIENT_ID
let CLIENT_SECRET = process.env.CLIENT_SECRET
const nodemailer = require('nodemailer');
const { UsersModel } = require('../Model');
exports.sendMail = (app) => {
    app.post("/sendMail", async (req, res) => {
        try {
            let { userID, email, subject, body } = req.body;
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'softwarewizard@icfdr.org',
                    pass: 'sxjo suxt omjl nngi'
                    // user: 'icfdrtesting1011@gmail.com',
                    // pass: 'owaqjzqszbsinbms'
                }
            });
            const mailOptions1 = {
                from: "icfdrtesting1011@gmail.com",
                to: email,
                subject: subject,
                html: body
            };
            transporter.sendMail(mailOptions1, function (error, info) {
                if (error) {
                    console.log(error)
                    res.send(error)
                } else {
                    console.log('Email sent: ' + info.response);
                    res.send({ email, subject, body,message:`Email sent Successfully to ${email}` })
                }
            });
        }
        catch (err) {
            console.log(err)
            res.send({error:err,message:"Session Expired. Please Login Again!"})
        }
    })
}