import gulp from 'gulp'
import eslint from 'gulp-eslint';
import { paths } from '../config/paths';

// JavaScript Linting
const jsLint = () => {
  return gulp.src(paths.js)
  .pipe(eslint())
  .pipe(eslint.results(results => {
    // Called once for all ESLint results.
      console.log(`Total Results: ${results.length}`);
      console.log(`Total Warnings: ${results.warningCount}`);
      console.log(`Total Errors: ${results.errorCount}`);
  }))
  .pipe(eslint.format())
};

exports.jsLint = jsLint;