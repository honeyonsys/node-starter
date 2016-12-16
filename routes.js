module.exports = function (app) {

    app.get('/admin', function (req, res) {
        res.render('./admin/login.njk');
    });

    app.get('/admin/dashboard', function (req, res) {
        res.render('./admin/dashboard.njk');
    });

    app.get('/', function (req, res) {
        res.render('./frontend/index.njk');
    });

};