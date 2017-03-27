const express = require('express');
module.exports = (parseService) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        parseService.parse().then((result) => {
            res.json(result);
            res.end();
        });
    });
    return router;
};