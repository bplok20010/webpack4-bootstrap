const build = require('./lib/build');
const watch = require('./lib/watch');

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

    const config = require(`./config/webpack.config.${env}`);

    if( options.watch ) {
        watch(config, (err, stats) => {
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