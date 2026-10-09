const requestListener = require('../backend/server.js');

module.exports = (req, res) => {
    return requestListener(req, res);
};
