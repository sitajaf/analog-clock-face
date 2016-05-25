
module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            './src/**/*.js',
            './test/**/*.js'
        ],

        exclude: [],

        preprocessors: {},

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,


        autoWatch: true,

        browsers: ['PhantomJS'],

        singleRun: true,

        concurrency: Infinity
    })
};
