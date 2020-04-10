const { Controller } = require('../../../core/Controller');
const { ResultsParkirController } = require('../../controllers/parkir.controller/results.controller');
const { CheckoutParkirController } = require('../../controllers/parkir.controller/checkout.controller');
const { CheckinParkirController } = require('../../controllers/parkir.controller/checkin.controller');

class ParkirRoute extends Controller {
    constructor(app) {

        super(app);
        this.controller = new Controller(app);
    }
    Route() {

        const { controller } = this;
        controller.GET('/parkir/results', (req, res, next) => {
            return new ResultsParkirController(req, res).Controller();
        });

        controller.POST('/parkir/checkin', (req, res, next) => {

            return new CheckinParkirController(req, res).Controller();
        });

        controller.POST('/parkir/checkout', (req, res, next) => {

            return new CheckoutParkirController(req, res).Controller();
        });
    }
}

module.exports = { ParkirRoute };