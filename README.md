# [gulp](https://github.com/wearefractal/gulp)-jscrambler

> Obfuscate your source files.

## Install

Install with [npm](https://npmjs.org/package/gulp-jscrambler).

```
npm install --save-dev gulp-jscrambler
```

## Examples

```js
var gulp = require('gulp');
var jScrambler = require('gulp-jscrambler');

gulp.task('default', function () {
  gulp
    .src('app/**/*.js')
    .pipe(jScrambler({
      keys: {
        accessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        secretKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      },
      applicationId: 'XXXXXXXXXXXX',
      params: {
        functionOutlining: {},
      }
    }))
    .pipe(gulp.dest('dist/'));
});
```

## Options

### keys.accessKey
Type: `String`

A string value that is used to provide the JScrambler API with the access key.

### keys.secretKey
Type: `String`

A string value that is used to sign requests to the JScrambler API.

### host
Type: `String`

A string value that is used to provide the JScrambler's host.

### port
Type: `Number`

A number value that is used to provide the JScrambler's port.

### params
Type: `Object`

You can find a list of all the possible parameters in [here](https://docs.jscrambler.com/).
