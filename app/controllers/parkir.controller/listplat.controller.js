// @ts-nocheck
const { parkirModel } = require('../../models/parkir.model');
const { CustomeMessage } = require('../../helpers/customeMessage');
const { Module } = require('../../../configs/Module');

class ListPlatController extends parkirModel {
    constructor(req, res) {
        super();
        this.req = req;
        this.res = res;
        this.model = new parkirModel();
        this.msg = new CustomeMessage(res);
        this.lodash = new Module().lodash();
    }
    async Controller() {

        const { req, res, model, msg, lodash } = this;
        let result = await model.getData();

        const conditionArr = {};
        req.query.tipe? conditionArr.tipe = req.query.tipe  :null;
        req.query.warna? conditionArr.warna = req.query.warna  :null;
        result = lodash.filter(result,conditionArr)

        if (result == undefined || result == '' || (Array.isArray(result)&& result.length == 0) ) {
            msg.error('error', 404, {

                response: {

                    status: 'error',
                    code: 404,
                    method: req.method,
                    message: 'Fetch Failed'
                }
            });
        } else {
            let flatMap = lodash.flatMap(result, function(o){return o.plat_nomor});
            msg.success('success', 200, {

                response: {

                    status: 'success',
                    code: res.statusCode,
                    method: req.method,
                    message: 'Fetch Success',
                    data: {
                        plat_nomor : flatMap
                    }
                }
            });
        }

    }
}

module.exports = { ListPlatController };