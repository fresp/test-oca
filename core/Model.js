const { Module } = require('../configs/Module');
class Model {
    constructor() {

        this.fs = new Module().fs();
    }
    findAll(path) {
        const { fs } = this;
        let data =    fs.readFileSync(`${process.env.PWD}${path}`);
        data = JSON.parse(data);
        return data;
        
    }
    
    create(path, item) {

        const { fs } = this;
        let data = JSON.stringify(item);
        fs.writeFileSync(`${process.env.PWD}${path}`, data);
        return true;
    }
}

module.exports = { Model };