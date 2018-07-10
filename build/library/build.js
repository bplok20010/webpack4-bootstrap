const webpack = require("webpack");

process.on('unhandledRejection', err => {
    throw err;
});

module.exports = function(config){

    if(!process.env.NODE_ENV) {
        return Promise.reject( new Error(`process.env.NODE_ENV not set!`) );
    }

    return new Promise(function(resolve, reject){
        
        const compiler = webpack(config);

        compiler.run((err, stats) => {
            if (err) {
                return reject(err);
            }
        
            const info = stats.toJson();
        
            if (stats.hasErrors()) {
                return reject( new Error(info.errors) );
            }
            
            return resolve({
                stats,
                warnings: info.warnings
            });
        });
    });
}