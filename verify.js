exports.user = (req, res, next) => {
    if (!req.user) {
        let err = new Error('You are not authenticated!');
        err.status = 403;
        return next(err);
    } else {
        next();
        
    }
};
