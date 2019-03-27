'use strict';
var AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1'
});
var s3 = new AWS.S3();

function createUserFolder(event, context, callback) {
    // console.log(event.cognitoPoolClaims.sub);
    let sub = event.request.userAttributes.sub;
    console.log("Sub: ", sub);
    var params = {
        Bucket: process.env.INPUT_S3_BUCKET,
        Key: process.env.INPUT_S3_BUCKET_FOLDER + '/' + sub + '/'
        // ACL: 'public-read', 
        // Body: 'body does not matter'
    };
    s3.putObject(params, function(err, data) {
        if (err) {
            throw err;
            console.log("Bucket not created.");
            var error = new Error("Bucket not created.")
            context.fail(error);
            return;
        } else {
            console.log("Bucket created");
            context.done(null, event);
            return;
        }
    });
};
module.exports = {
    createUserFolder
};


