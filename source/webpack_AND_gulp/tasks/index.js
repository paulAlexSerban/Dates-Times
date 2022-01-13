import gulp from 'gulp'

import { scripts } from './webpack'

export const build = gulp.series( scripts )
