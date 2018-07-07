//import _ from 'lodash';
import $ from 'jQuery';
import pkg from './pkg.json'
import pkg5 from './pkg.json5'
import html from './test.html'
import md from './test.md'
//import twig from './test.twig'

import config from 'config';

import App from './app';

class A {
    static a = 3;
}

class B extends A {}

console.log(pkg, pkg5, html, md, $, config);



export default function(templateParams) {
    if (process.env.NODE_ENV === 'development') console.log(window, history);

    return (function(data) {
        let __t;
        let __p = '';
        __p += '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>' +
            '</title>\n  </head>\n  <body>\n  </body>\n</html>';
        return __p;
    })();

}