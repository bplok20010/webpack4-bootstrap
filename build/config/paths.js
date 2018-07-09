const path = require('path');
const fs = require('fs');
const pick = require('object.pick');
const util = require('../util');

const resolveApp = util.resolveApp;
const getCustomConfig = util.getCustomConfig;

const customConfig = getCustomConfig();

const defaults = {
    appPath: resolveApp('.'),
    appDist: resolveApp('dist'),
    appPolyfills: require.resolve('./polyfills.js'),
    appEntryHtml: resolveApp('src/index.html'),
    appEntryJs: resolveApp('src/index.js'),
    appSrc: resolveApp('src'),
    appNodeModules: resolveApp('node_modules'),
    publicUrl: undefined//resolveApp('public'),
};

module.exports = Object.assign({}, defaults, pick(customConfig || {}, Object.keys(defaults)));