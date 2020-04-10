// @ts-nocheck
const { parkirModel } = require('../../models/parkir.model');
const { CustomeMessage } = require('../../helpers/customeMessage');
const { Module } = require('../../../configs/Module');

class CheckoutParkirController extends parkirModel {
    constructor(req, res) {
        super();
        this.req = req;
        this.res = res;
        this.model = new parkirModel();
        this.msg = new CustomeMessage(res);
        this.lodash = new Module().lodash();
        this.moment = new Module().moment();
    }
    async Controller() {

        const { req, res, model, msg, lodash, moment } = this;
        let result = await model.getData();

        const conditionArr = {};
        req.body.plat_nomor? conditionArr.plat_nomor = req.body.plat_nomor  :null;
        let filtered = lodash.filter(result,conditionArr)
        if(!req.body.plat_nomor)
            filtered = undefined
        if (filtered == undefined || filtered == '' || (Array.isArray(filtered)&& filtered.length == 0) ) {

            msg.error('error', 404, {

                response: {

                    status: 'error',
                    code: 404,
                    method: req.method,
                    message: 'Checkout Failed'
                }
            });
        } else {
            filtered = filtered[0];
            let price = 0;
            if(filtered.tipe=="MPV"){
                price = 35000

            } 
            if(filtered.tipe=="SUV"){
                price = 25000 
            }

            let endTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
            let startTime = moment(`${filtered.tanggal_masuk}`).format('YYYY-MM-DD HH:mm:ss');

            let diff = moment
                    .duration(moment(endTime, 'YYYY/MM/DD HH:mm')
                    .diff(moment(startTime, 'YYYY/MM/DD HH:mm'))
                    ).asHours();
            diff = Math.ceil(diff);

            let cost = parseInt(price)+((parseInt(diff)-parseInt(1))*(parseInt(price)*parseFloat(0.2)));
            
            filtered.tanggal_keluar = endTime;
            filtered.jumlah_bayar = cost;
            filtered.lot_status = false;
            
            let obj = lodash.find(result, ['plat_nomor', filtered.plat_nomor]);
            lodash.assign(obj, filtered);
            await model.append(result);

            msg.success('success', 200, {

                response: {

                    status: 'success',
                    code: res.statusCode,
                    method: req.method,
                    message: 'Checkout Success',
                    data: filtered
                }
            });
        }

    }
}

module.exports = { CheckoutParkirController };