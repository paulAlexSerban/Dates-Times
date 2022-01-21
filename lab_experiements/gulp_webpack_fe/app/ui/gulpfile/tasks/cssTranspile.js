import gulp from 'gulp';
import { paths } from '../config/paths';
import dartSass from 'dart-sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import rename from "gulp-rename";
import path from "path";

const sass = gulpSass(dartSass);

export const cssTranspile = () => {
  return gulp.src(paths.scssEntries)
  .pipe(sass.sync({ outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(rename((file) => {
    // this removes the last parent directory of the relative file path
    file.dirname = path.dirname('/');
}))
  .pipe(gulp.dest([`${paths.distDir}/build`]))
}