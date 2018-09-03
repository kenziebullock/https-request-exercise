let getHTML = require('./http-functions');

function printLowerCase (html) {
    let lower = html.toLowerCase();
    console.log(lower);
}

function printHTML (html) {
    console.log(html);
}

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
};





getHTML(requestOptions, printLowerCase);