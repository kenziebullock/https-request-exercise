let getHTML = require('./http-functions');
//const https = require('https');

function printHTML (html) {
    console.log(html);
}

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

getHTML(requestOptions, printHTML);