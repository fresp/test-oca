class Controller {
    constructor(app) {

        this.app = app;
    }
    GET(route, callback) {

        const { app } = this;

        app.get(route, callback);
    }
    POST(route, callback) {

        const { app } = this;

        app.post(route, callback);
    }
    DELETE(route, callback) {

        const { app } = this;

        app.delete(route, callback);
    }
    PUT(route, callback) {

        const { app } = this;

        app.put(route, callback);
    }
}

module.exports = { Controller };