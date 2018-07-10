const build = require('./library/build');
const watch = require('./library/watch');
const merge = require('webpack-merge');
const util = require('./util');

function onFulfilled(data){
    console.log(data.stats.toString({
        chunks: false,  // Makes the build much quieter
        colors: true    // Shows colors in the console
    }));
}

function onRejected(err){
    console.error( err );
}

module.exports = function(env, options = {
    watch: false
}){
    env = env || 'production';

    process.env.NODE_ENV = env;

    const customConfig = util.getCustomConfig();
    const config = require(`./config/webpack.config.${env}`);

    if( options.watch ) {
        watch(merge(config, customConfig.webpack || {}), (err, stats) => {
            if( err ) {
                onRejected(err);
                return; 
            }
            onFulfilled({
                stats
            });
        })
    } else {
        build(config).then(onFulfilled, onRejected);
    }
    
}