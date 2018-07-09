const path = require('path');
const fs = require('fs');
var pick = require('object.pick');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

let customConfig = {};
const customFilePath = path.join( appDirectory, 'nil.build.config.js' );

if( fs.existsSync(customFilePath) ) {
    customConfig = require(customFilePath);
    if( typeof customConfig === 'function' ) {
        customConfig = customConfig(resolveApp);
    }
}

const defaults = {
    appPath: resolveApp('.'),
    appDist: resolveApp('dist'),
    appPolyfills: require.resolve('./polyfills.js'),
    appEntryHtml: resolveApp('src/index.html'),
    appEntryJs: resolveApp('src/index.js'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    appNodeModules: resolveApp('node_modules'),
    publicUrl: undefined//resolveApp('public'),
};

module.exports = Object.assign({}, defaults, pick(customConfig || {}, Object.keys(defaults)));