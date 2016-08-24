'use strict';

module.exports.hello = (event, context, cb) => {
    var response = {
        message: 'Hello world!'
    };

    cb(null, response);
};
