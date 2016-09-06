'use strict';

module.exports.test = (event, context, cb) => {
    console.log(event);
    console.log(context);

    var response = {
        text: "Bruno says hello!",
        response_type: "in_channel",
    };

    cb(null, response);
};
