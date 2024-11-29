function authorization(req, res, next) {
    try {
        const { id, role } = req.user;
        const authorId = +req.params.id;
        if (role === "admin") next();
        else if (id === authorId) next();
        else throw { name: "Forbidden" };
    } catch (error) {
        next(error)
    }
}

function isAdmin(req, res, next) {
    try {
        const { role } = req.user;
        if (role === "admin") next();
        else throw { name: "Forbidden" };
    } catch (error) {
        next(error);
    }
}

module.exports = {
    authorization,
    isAdmin
}