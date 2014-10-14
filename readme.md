# gulp-belch

> A gulp wrapper for the popular [belch](https://github.com/jessegavin/belch) program.

## Install

```bash
npm install --save-dev gulp-belch
```

## Usage

```js
//gulpfile.js
var gulp = require('gulp');
var belch = require('gulp-belch');

gulp.task('build', function() {
  return gulp.src('*.js')
    .pipe(gulp.dest('./public'))
    .pipe(belch());
});
```