const { authenticateToken } = require("../Authorization/AuthenticateToken");



exports.WhatsAppController = (app) => {

    const receiveRequest = async (req, res) => {
        const data = req.body;
        try {
           res.send({...data,message:"Request Received"})
        } catch (err) {
            // console.log(err)
            res.send(err);
        }
    }
    app
        .post(`/callback/whatsapp`, receiveRequest)
}