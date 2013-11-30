'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    require: './lib/sass-extensions.rb'
                },
                files: [{
                    expand: true,
                    cwd: 'bundle/styles',
                    src: ['main.scss'],
                    dest: 'bundle',
                    ext: '.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);
}