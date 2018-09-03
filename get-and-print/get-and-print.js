const https = require('https');

function getAndPrintHTML() {

    const requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };

    var appendedData = [];
    // use buffering technique to append each chunk of data to a variable as it is received
    https.get(requestOptions, function (response) {

        response.setEncoding('utf8');

        response.on('data', function(data,) {
            console.log('Chunk Received. Length:', data.length);
            appendedData += data;
        });

        response.on('error', function() {
            console.log('error');
        });

        response.on('end', function() {
            console.log('Response stream complete.');
            console.log(appendedData);
            //return appendedData;
        });

    });
    // console.log data once it is received
    //return appendedData;

}

getAndPrintHTML();