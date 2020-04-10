// @ts-nocheck
const { Model } = require('../../core/Model');
const path = "/data/parkir.json";

class parkirModel extends Model {
    constructor() {
        super();
        this.model = new Model();
    }
  
    async getData() {
        const { model } = this;
        return await model.findAll(path);
    }

    async append(object) {
        const { model } = this;
        return await model.create(path, object)
    }
}

module.exports = { parkirModel };