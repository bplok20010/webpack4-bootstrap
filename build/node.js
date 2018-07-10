process.env.NODE_ENV = 'node';

const rimraf = require('rimraf');
const child_process = require('child_process');
const path = require('path')
const babel = require("babel-core");
const config = require('./config/babel.node.config');
const esConfig = require('./config/eslint.config');
const glob = require('fast-glob');
const writeFile = require('write');
const fs = require('fs');
const CLIEngine = require("eslint").CLIEngine;

const util = require('./util');
const paths = require('./config/paths');

const esCli = new CLIEngine({
    baseConfig: esConfig,
    useEslintrc: false,
    configFile: util.customESlintFileExists() ? util.resolveCustomESlintFile() : null,
});

function transformEslintMessage(report){
    const errorMsg = [];
    const warnMsg = [];

    report.results.forEach( result => {
        console.log( result.filePath );
        result.messages.forEach( message => {
            console.warn(`${message.message}(line: ${message.line} column:${message.column},)`, message.ruleId);
        } );
    } )
}

rimraf(paths.appDist, () => {

    glob(["**/?(*).*"],  {
        cwd: paths.appSrc
    }).then( files => {
    
        files.forEach(fpath => {

            const srcFile = path.resolve(paths.appSrc, fpath);
            const distFile = path.resolve(paths.appDist, fpath);
            const source = fs.readFileSync(srcFile);

            if( /\.js$/.test(fpath) ) {
            
                const report = esCli.executeOnFiles([srcFile]);
                if(  report.errorCount || report.warningCount ) {
                    transformEslintMessage(report);
                }

                const result = babel.transform(source, config);

                writeFile(distFile, result.code, function(err) {
                    if (err) return console.log(err);
                });

            } else {
                writeFile(distFile, source, function(err) {
                    if (err) return console.log(err);
                });
            }

        });
        
    } ).catch(err => console.log(err));

});