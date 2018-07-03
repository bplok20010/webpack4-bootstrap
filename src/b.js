import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import three from 'three.js';

const async1 = require('./components/async1');
const lib_async1 = require('./clib/async1');

const util = require('./util');
const css = require('./style/index.css');
console.log(css + '');

const ini = require('./config.ini');
console.log(ini);

const txt = require('./config.txt');
console.log(txt);

const less = require('./style/index.less');

console.log(less);


// const scss = require('./style/index.scss');

// console.log(scss);

const html = require('./index.html');

console.log(html);