var gulp = require('gulp');
var browserify = require('gulp-browserify');
var glob = require('glob');

var main = function (paths, opt) {
    glob(paths, function (err, files) {
        if (err) {
            throw err;
        }
        var tasks = files.map(function (entry) {
            return browserify({entries: [entry]})
        });
    });
};

module.export = main;