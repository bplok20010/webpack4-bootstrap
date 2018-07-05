module.exports = {
    //"babelrc": false,
    "presets": [
        "env", "react", "flow"
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
        // "transform-proto-to-assign",//IE10以下不支持__proto__
        "transform-runtime"
    ]
}