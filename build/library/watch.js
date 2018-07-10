const webpack = require("webpack");

process.on('unhandledRejection', err => {
    throw err;
});

module.exports = function(config, renderer){

    if(!process.env.NODE_ENV) {
        return Promise.reject( new Error(`process.env.NODE_ENV not set!`) );
    }

    const compiler = webpack(config);

    const watching = compiler.watch({
        // Example watchOptions
        aggregateTimeout: 300,
        poll: undefined
    }, (err, stats) => {
        renderer(err, stats);
    });
}