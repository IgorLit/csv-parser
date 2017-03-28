const express = require('express');
module.exports = (parseService) => {
    const router = express.Router();

    router.post('/', (req, res) => {
        parseService.parse(req.body.path).then(result => {
            res.json(result);
        }).catch(error => {
            res.json({error});
        });
    });
    return router;
};