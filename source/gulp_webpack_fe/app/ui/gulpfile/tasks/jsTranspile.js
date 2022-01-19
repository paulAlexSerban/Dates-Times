import gulp from 'gulp';
import gulpWebpack from 'webpack-stream';
import webpack from 'webpack';
import named from 'vinyl-named';
import { webpackConfig } from '../config/webpack.config';
import { paths } from '../config/paths';

export const jsTranspile = () => {
  return gulp.src(paths.jsEntries)
    .pipe(named())
    .pipe(gulpWebpack( webpackConfig, webpack))
    .pipe(gulp.dest(`${paths.distDir}/build`))
}
