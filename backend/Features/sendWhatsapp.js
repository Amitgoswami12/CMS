const { default: axios } = require("axios");
const { UsersModel } = require("../Model");
require("dotenv").config();
// let CLIENT_ID = "390139244489-92v6mqj5oljo5a6iago8q8445eu35lpd.apps.googleusercontent.com"
// let CLIENT_SECRET = "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"

exports.sendWhatsapp = (app) => {
  app.post("/sendWhatsapp", async (req, res) => {
    let { number, name, userid, password } = req.body;
    try {
      await axios
        .get(
          `https://voice.roundsms.co/api/sendmsg.php?user=ICFDRWA&pass=123456&sender=BUZWAP&phone=${number}&text=platform1&priority=wa&stype=normal&Params=${name},${userid},${password}`
        ).then(response=>res.send({ status: true }))
      
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  });

  app.post("/sendWhatsappOtp", async (req, res) => {
    let { otp, email } = req.body;
    try {
      let USER = await UsersModel.findOne({ email: email })
      let number = USER.whatsApp
      console.log(USER.whatsApp)

      if (USER && number) {
        axios
          .get(
            `https://voice.roundsms.co/api/sendmsg.php?user=ICFDRWA&pass=123456&sender=BUZWAP&phone=${number}&text=password_rest&priority=wa&stype=normal&Params=given,${otp}`
          )
          .then((data) => res.send(data)).catch(err => res.send(err))
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  });
  app.post("/whatsappMemberCreated", async (req, res) => {
    let { number } = req.body;
    let text = "Welcome to ICFDR!  Thanks for joining us. Explore, connect, and enjoy all the exciting features we have to offer. For more details visit www.icfdr.org or call +91 789 395 1063."
    try {
      axios.post(`https://voice.roundsms.co/api/sendmsg.php?user=ICDR&pass=123456&sender=ICFDRV&phone=${number}&text=${text}&priority=ndnd&stype=normal`)

      axios.post(`https://voice.roundsms.co/api/sendmsg.php?user=ICFDRWA&pass=123456&sender=BUZWAP&phone=${number}&text=icfdr_registration&priority=wa&stype=normal`)

      res.send({message:"Messages Sent",status:200})
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  });
};
