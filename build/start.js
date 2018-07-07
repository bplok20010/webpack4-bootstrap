const webpack = require("webpack");
const config = require('./config/webpack.dev');

process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err;
});

const compiler = webpack(config);

compiler.run((err, stats) => {
    if (err) {
        throw err;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
        console.error(info.errors.join(''));
    }

    if (stats.hasWarnings()) {
        console.warn(info.warnings.join(''));
    }
});