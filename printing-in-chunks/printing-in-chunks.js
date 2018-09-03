// require https module
const https = require('https');

function getAndPrintHTMLChunks() {

    const requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };

    // .get URL from https library
    https.get(requestOptions, function(response) {
        //set encoding of received data to UTF-8
        response.setEncoding('utf8');

        response.on('data', function(data) {
            console.log('Chunk Received. Length:', data.length + '\n');
            console.log(data);
        });

        response.on('error', function(error) {
            console.log('Error!')
        })

        response.on('end', function() {
            console.log('Response stream complete.');
        });

        

    });
    // console.log each chunk of data as its received
    // concat with newline char so to visualize each chunk


    
}

getAndPrintHTMLChunks();
