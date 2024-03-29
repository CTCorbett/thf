module.exports = function(grunt) {
	require('time-grunt')(grunt);

	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'style.css': 'scss/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: 'scss/**/*.scss',
				tasks: ['sass']
			},
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
					'style.css',
					'img/**/*',
					'*.php',
					'functions/*.php',
					'js/**/*.js',
					'views/**/*.twig'
					]
				},
				options: {
					watchTask: true,
					host: "tco.dev",
					proxy: {
						host: "thf.tco.dev"
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['browserSync', 'watch']);

	
};
