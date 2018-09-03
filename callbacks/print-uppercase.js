let getHTML = require('./http-functions');

function printUpperCase (html) {
    let upper = html.toUpperCase();
    console.log(upper);
}

function printHTML (html) {
    console.log(html);
}

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
};





getHTML(requestOptions, printUpperCase);