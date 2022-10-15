import gulp from 'gulp';
import terser from 'terser';
import gulpTerser from 'gulp-terser';
import { paths} from '../config/paths';

export const jsMinify = () => {
  return gulp.src(`${paths.distDir}/build/*.js`)
  .pipe(gulpTerser({}, terser.minify))
  .pipe(gulp.dest(`${paths.distDir}/public/js`))
;
}