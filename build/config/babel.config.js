const browsers = require('./browserslist.config');
const util = require('../util');
const merge = require('webpack-merge');

module.exports = merge({
    "babelrc": false,
    "compact": false,
    "presets": [
        ["env", {
            "targets": {
                "ie": 9,
                "browsers": browsers
            },
            useBuiltIns: false,
        }], "react", "flow"
    ],
    "plugins": [
        "syntax-dynamic-import",
        "transform-async-generator-functions",
        "transform-async-to-generator",
        "transform-class-properties",
        "transform-do-expressions",
        "transform-export-extensions",
        "transform-function-bind",
        "transform-object-assign",
        "transform-object-rest-spread",
        "transform-react-jsx",
        "transform-regenerator",
        //"transform-proto-to-assign",//IE10以下不支持__proto__
        ["transform-runtime", {
            helpers: true,
            polyfill: true,
            regenerator: true,
        }]
    ]
}, util.getBabelCustomConfig())