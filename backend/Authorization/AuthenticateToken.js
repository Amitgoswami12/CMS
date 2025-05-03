const jwt = require('jsonwebtoken');
const { UsersModel, MemberModel } = require('../Model');
const secret = 'accha-theekHai-samajhGaya';
exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);
    let user
    jwt.verify(token, secret, async (err, decoded) => {
        if (err) return res.sendStatus(403);
        user = await UsersModel.findById(decoded.userId)
        if (!user) {
            user = await MemberModel.findById(decoded.userId)
            if(!user){
                return res.sendStatus(404);
            }
        }
        req.user = user;
        next();
    });
}