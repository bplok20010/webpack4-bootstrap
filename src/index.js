//import _ from 'lodash';
//import $ from 'jQuery';
//import pkg from './pkg.json'
//import pkg5 from './pkg.json5'
//import html from './test.html'
//import md from './test.md';
import vx from './test.vue';
//import twig from './test.twig'

//import config from 'config';

//import App from './app';

//import xx from './clib/async1'; 

class A {
    static a = 3;
}

class B extends A {}

//console.log(pkg, pkg5, html, md);

const  {c,...a} = {c:4,a:3,b:6};

// const jsx = <div t1="asdf" {...a}>asf</div>

Promise.resolve('sdaf')
console.log(vx)

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