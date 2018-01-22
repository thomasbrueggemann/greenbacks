const gulp = require("gulp");
const gutil = require("gulp-util");
const gulpif = require("gulp-if");
const streamify = require("gulp-streamify");
const source = require("vinyl-source-stream");
const babelify = require("babelify");
const browserify = require("browserify");
const watchify = require("watchify");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");

const production = process.env.NODE_ENV === "production";

const dependencies = ["alt", "react", "react-dom", "react-router"];

/*
 |--------------------------------------------------------------------------
 | Compile third-party dependencies separately for faster performance.
 |--------------------------------------------------------------------------
 */
gulp.task("browserify-vendor", function() {
	return browserify({
		debug: !production
	})
		.require(dependencies)
		.bundle()
		.pipe(source("vendor.bundle.js"))
		.pipe(
			gulpif(
				production,
				streamify(
					uglify({
						mangle: false
					})
				)
			)
		)
		.pipe(gulp.dest("js/build"));
});

/*
 |--------------------------------------------------------------------------
 | Compile only project files, excluding all third-party dependencies.
 |--------------------------------------------------------------------------
 */
gulp.task("browserify", ["browserify-vendor"], function() {
	return browserify({
		entries: "js/src/main.js",
		debug: !production
	})
		.external(dependencies)
		.transform(babelify)
		.bundle()
		.pipe(source("bundle.main.js"))
		.pipe(
			gulpif(
				production,
				streamify(
					uglify({
						mangle: false
					})
				)
			)
		)
		.pipe(gulp.dest("js/build"));
});

// DEFAULT
gulp.task("default", ["browserify-vendor", "browserify"]);
