const https = require('https');

function getHTML(options, callback) {
    

    var appendedData = '';
    // use buffering technique to append each chunk of data to a variable as it is received
    https.get(options, function (response) {

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
            callback(appendedData);
            //return appendedData;
        });

    });
    
}

function printHTML (html) {
    console.log(html);
}

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

getHTML(requestOptions, printHTML);