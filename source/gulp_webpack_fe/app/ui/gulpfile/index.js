import gulp from 'gulp';
import { paths } from './config/paths';
import { cssStyleLint } from './tasks/cssStyleLint';
import { cssTranspile } from './tasks/cssTranspile';
import { jsLint } from './tasks/jsLint';
import { jsTranspile } from './tasks/jsTranspile';
import { jsMinify } from './tasks/jsMinify';
import { cssMinify } from './tasks/cssMinify';

const styleTasks = gulp.series( cssStyleLint, cssTranspile );
const jsTasks = gulp.series( jsLint, jsTranspile );

export const minifyAll = gulp.parallel(cssMinify, jsMinify)

export const build_dev = gulp.series(  
  gulp.parallel( styleTasks, jsTasks ),
);

export const build_prod = gulp.series(
  build_dev, minifyAll
)

const isPositionPattern = (string, pattern) => {
  return pattern.test(string);
};

gulp.task('watch_all', () => {
  gulp.watch([paths.css, paths.js], {
    'awaitWriteFinish': true
  }).on('change', (path, stats) => {
    if(isPositionPattern(path, /scss$/)) {
      console.log(`CSS changed in File ${path}`);
      styleTasks();
    } else if(isPositionPattern(path, /js$/)) {
      console.log(`JS changed in File ${path}`);
      jsTasks();
    }
  }).on('add', (path, stats) => {
    console.log(`File ${path} was added`);
  }).on('unlink', function(path, stats) {
    console.log(`File ${path} was removed`);
  });
})
