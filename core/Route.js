// route parkir
const { ParkirRoute } = require('../app/routes/parkir.route/index.route');

class Route {
    static defaultRoute(app) {
        return [
            // init parkir route
            new ParkirRoute(app).Route(),
        ]
    }
}

module.exports = { Route };