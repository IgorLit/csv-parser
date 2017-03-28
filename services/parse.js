const fs = require('fs');
const neatCsv = require('neat-csv');

module.exports = () => {

    function ParseService() {
        let self = this;
        self.parse = parse;
        function parse(path) {
            return new Promise((resolve, reject) => {
                fs.readFile('../../' + path, (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        neatCsv(data).then(result => {
                            resolve(result);
                        });
                    }
                })
            });
        }
    }

    return new ParseService();
};