module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      production: {
        files: {
          'css/simpleParallax.css': 'less/simpleParallax.less'
        }
      }
    },
    cssmin: {
      options: {
        processImport: false,
        rebase: false
      },
      build: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 4 versions', 'ie 8']
      },
      build: {
        src: ['css/simpleParallax.css']
      }
    },
    uglify: {
      build: {
        files: {
          'js/simpleParallax.min.js': ['js/simpleParallax.js']
        }
      }
    }
  })

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-autoprefixer')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-less')

  // Default task(s).
  grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin', 'uglify'])
}
