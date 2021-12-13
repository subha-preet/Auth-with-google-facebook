exports.getUser = (req, res, next) => {
    res.render('shop/login', {
        pageTitle: 'login',
        path: '/login'
    });
};

exports.addNewUser = (req, res, next) => {
    res.render('shop/signup', {
        pageTitle: 'signup',
        path: '/signup'
    });
};