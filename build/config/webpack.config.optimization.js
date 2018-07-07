
module.exports = {
    runtimeChunk: false,//'single' false ,
    splitChunks: {
        name: 'commons',
        chunks: 'all',
        maxAsyncRequests: 5,  
        maxInitialRequests: 5,
        minSize: 30000,
        cacheGroups: {
            // react: {
            //     test: /node_modules[\\/]react/,
            //     name: 'react',
            //     priority: 4
            // },
            vendors: {
                name: "vendors",
                test: /[\\/]node_modules[\\/]/,
                priority: -10
            },
            // components: {
            //     test: /[\\/]components[\\/]/,
            //     name: 'components',
            //     priority: -20
            // },
            // styles: { //test
            //     name: 'styles',
            //     test: /\.(css|less|scss)$/,
            // }
        }
    }
};