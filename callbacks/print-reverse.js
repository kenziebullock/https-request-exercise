let getHTML = require('./http-functions');

function reverse (html) {
    let reversedText = html.split('').reverse().join('');
    console.log(reversedText);
}

function printHTML (html) {
    console.log(html);
}

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
};





getHTML(requestOptions, reverse);