var csv = require('csv-parser')
var fs = require('fs');
module.exports = () => {
    function ParseService() {
        let self = this;

        self.parse = parse;

        function parse(path) {
            return new Promise((resolve, reject) => {
                fs.createReadStream('../Demo.csv')
                    .pipe(csv())
                    .on('data', function (data) {
                        console.log('Name: %s Age: %s', data.NAME, data.AGE)
                    })
                resolve({success: "true"});
            });
        }
    }

    return new ParseService();
};