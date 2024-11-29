module.exports = function errorHandler(error, req, res, next) {
    console.log(error);
    let status = error.status || 500;
    let name = error.name || "Internal Server Error";

    switch (name) {
        case "Username / Password is required":
            status = 400;
            break;
        case "SequelizeUniqueConstraintError":
            status = 401;
            name = "Username has been used";
            break;
        case "SequelizeValidationError":
            status = 401;
            name = error.errors[0].message;
            break;
        case "Invalid Username / Password":
            status = 401;
            break;
        case "Invalid Token":
            status = 401;
            break;
        case "Forbidden":
            message = "You are unauthorized";
            status = 403;
            break;
    }
    res.status(status).json({ message: name });
}