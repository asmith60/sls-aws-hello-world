'use strict';

module.exports.hello = (event, context, cb) => {
    console.log(event);

    var response;

    if (event.body.challenge) {
        response = {
            challenge: event.body.challenge
        };

        cb(null, response);
    }

    response = {
        message: 'Hello world!'
    };

    cb(null, response);
};
