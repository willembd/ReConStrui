
module.exports = (req, res, next) => {
    const jwt = req.headers["authorization"];
    const chavePrivada = "screet";

    // Efetuando a validação do JWT:
    const jwtService = require("jsonwebtoken");
    jwtService.verify(jwt, chavePrivada, (err) => {
        if (err) {
            console.log(err);
            res.status(403).end();
            return;
        }
        next();
    });
};