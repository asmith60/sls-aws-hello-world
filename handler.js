'use strict';

module.exports.hello = (event, context, cb) => {
    var response = {
        message: 'Hello world!'
    };

    console.log(event);

    cb(null, response);
};
