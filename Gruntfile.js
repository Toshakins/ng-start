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
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
            },
            files: {
                src: ['bundle/js/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['sass', 'jshint']);
}