"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const login = (req, res, next) => {
    try {
        const decode = (0, jsonwebtoken_1.verify)(req.headers.authorization, process.env.SECRET);
        req.user = req.user = { user_id: decode.id, email: decode.email };
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Não autorizado" });
    }
};
exports.login = login;
