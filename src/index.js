import _ from 'lodash';

class A {
    static a = 3;
}

class B extends A {}


export default function(templateParams) {
    if ( process.env.NODE_ENV === 'development' ) console.log(_, window, history);

    return (function(data) {
        let __t;
        let __p = '';
        __p += '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>' +
            '</title>\n  </head>\n  <body>\n  </body>\n</html>';
        return __p;
    })();

}