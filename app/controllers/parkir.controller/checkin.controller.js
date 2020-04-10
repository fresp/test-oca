// @ts-nocheck
const { parkirModel } = require('../../models/parkir.model');
const { CustomeMessage } = require('../../helpers/customeMessage');
const { Module } = require('../../../configs/Module');

class CheckinParkirController extends parkirModel {
    constructor(req, res) {
        super();
        this.req = req;
        this.res = res;
        this.model = new parkirModel();
        this.msg = new CustomeMessage(res);
        this.lodash = new Module().lodash();
        this.moment = new Module().moment();
        this.max_lot = 5;
    }
    async Controller() {

        const { req, res, model, msg, lodash, moment, max_lot } = this;
        let result = await model.getData();

        const conditionArr = {
            lot_status : true
        };
        let filtered = lodash.filter(result,conditionArr)
        if(filtered.length >=  max_lot){
            msg.error('error', 404, {

                response: {

                    status: 'error',
                    code: 404,
                    method: req.method,
                    message: 'Parkir Penuh'
                }
            });
            return false;
        }
       
        let warna = req.body.warna.toLowerCase();
        let newData = {
            plat_nomor : req.body.plat_nomor,
            warna : warna.charAt(0).toUpperCase() + warna.slice(1),
            tipe : req.body.tipe.toUpperCase(),
            parking_lot : "A1",
            lot_status : true,
            tanggal_masuk : moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        };

        if(newData.tipe !="SUV"){
            msg.error('error', 404, {
                response: {

                    status: 'error',
                    code: 404,
                    method: req.method,
                    message: 'Tipe tidak diketahui'
                }
            });
            return false;
        }

        result.push(newData)
        await model.append(result);
        delete newData.lot_status
        msg.success('success', 200, {

            response: {

                status: 'success',
                code: res.statusCode,
                method: req.method,
                message: 'Checkin Success',
                data: newData
            }
        });
    }
}

module.exports = { CheckinParkirController };