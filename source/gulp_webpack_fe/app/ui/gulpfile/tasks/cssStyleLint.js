import gulp from 'gulp';
import gulpStylelint from 'gulp-stylelint';
import { paths } from '../config/paths';

export const cssStyleLint = () => {
  return gulp.src(paths.css)
  .pipe(gulpStylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }))
}