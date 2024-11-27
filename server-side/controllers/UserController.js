const { comparing } = require("../helpers/bcrypt");
const { signPayload } = require("../helpers/jwt");
const { User } = require("../models");

module.exports = class UserController {
    static async login(req, res, next) {
        try {
            const { username, password } = req.body;
            if (!username || !password) throw { name: "Username / Password is required" };

            const user = await User.findOne({ where: { username } });
            if (!user) throw { name: "Invalid Username / Password" };
            if (!comparing(password, user.password)) throw { name: "Invalid Username / Password" };

            const access_token = signPayload(req.body);

            res.status(200).json({ access_token: access_token });
        } catch (error) {
            next(error);
        }
    };

    static async register(req, res, next) {
        try {
            const { name, username, password } = req.body;
            await User.create(req.body);
            res.status(200).json({ message: `User has been created with username ${username}` });
        } catch (error) {
            next(error);
        }
    }
}