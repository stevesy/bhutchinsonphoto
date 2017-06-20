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
					'website/public/js/site.js': 'website/assets/scripts/site.js'
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
					'website/public/js/site.js': 'website/public/js/site.js'
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
					'website/assets/styles/*.scss',
					'!website/assets/styles/*/*.scss',
					'!website/assets/styles/_*.scss'
				],
				dest: 'website/public/css/',
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
				src: 'website/public/css/*.css'
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
					cwd: 'website/assets/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'website/public/img/'
				}]
			}
		},

		watch: {
			css: {
				files: 'website/assets/styles/**/*.scss',
				tasks: ['sass', 'postcss']
			},
			js: {
				files: ['Gruntfile.js', 'website/assets/scripts/**/*.js'],
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