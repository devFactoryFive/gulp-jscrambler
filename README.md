# [gulp](https://github.com/wearefractal/gulp)-jscrambler

> Obfuscate your source files.

## Install

Install with [npm](https://npmjs.org/package/gulp-jscrambler).

```
npm install --save-dev gulp-jscrambler@^0.1.5
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
      params: {
        domain_lock: 'www.mysite.com',
        self_defending: '%DEFAULT%'
      },
      deleteProject: true
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

### apiVersion
Type: `String`

A string value that is used to select the version of JScrambler.

### deleteProject
Type: `Boolean`

If this is set to `true` then the project will be deleted from JScrambler after it has been downloaded.

### params
Type: `Object`

You can find a list of all the possible parameters in [here](https://github.com/auditmark/node-jscrambler#jscrambler-options).
