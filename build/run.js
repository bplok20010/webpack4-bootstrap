const build = require('./lib/build');

function onFulfilled(data){
    console.log( data.warnings.join('') );
}

function onRejected(err){
    console.log( err );
}

module.exports = function(env){
    env = env || 'production';

    process.env.NODE_ENV = env;

    const config = require(`./config/webpack.config.${env}`);

    build(config).then(onFulfilled, onRejected);
}