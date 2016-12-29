module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
			dist: {
				options: {
					transform: [['babelify', { presets: 'es2015' }]],
					browserifyOptions: {
						debug: true
					},
					exclude: ['jquery'],
					require: ['jquery']
				},
				files: {
					'public/js/site.js': 'assets/scripts/site.js'
				}
			}
		},

		uglify: {
			my_target: {
				options: {
					sourceMap: true,
					quoteStyle: 1,
				},
				files: {
					'public/js/site.js': 'public/js/site.js'
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				expand: true,
				flatten: true,
				src: [
					'assets/styles/*.scss',
					'!assets/styles/*/*.scss',
					'!assets/styles/_*.scss'
				],
				dest: 'public/css/',
				ext: '.css'
			}
		},

		postcss: {
			options: {
				processors: [
					require('autoprefixer') ({
						browsers: ['last 2 versions','ie >= 9','chrome 28']
					})
				]
			},
			dist: {
				src: 'public/css/*.css'
			}
		},

		imagemin: {
			dist: {
				static: {
					options: {
						optimizationLevel: 3
					}
				},
				files: [{
					expand: true,
					cwd: 'assets/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'public/img/'
				}]
			}
		},

		watch: {
			css: {
				files: 'assets/styles/**/*.scss',
				tasks: ['sass', 'postcss']
			},
			js: {
				files: ['Gruntfile.js', 'assets/scripts/**/*.js'],
				tasks: ['browserify', 'uglify']
			}
		}

	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
};