module.exports = function errorHandler(error, req, res, next) {
    console.log(error);
    let status = error.status || 500;
    let name = error.name || "Internal Server Error";

    switch (name) {
        case "SequelizeUniqueConstraintError":
            status = 401;
            name = "Username has been used";
            break;
        case "SequelizeValidationError":
            status = 401;
            name = error.errors[0].message;
            break;
        case "Username / Password is required":
            status = 400;
            break;
        case "Invalid Username / Password":
            status = 401;
            break;
        default:
            break;
    }
    res.status(status).json({ message: name });
}