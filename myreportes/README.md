# testcafe-reporter-ninjareporter
[![Build Status](https://travis-ci.org/mikegthc/testcafe-reporter-ninjareporter.svg)](https://travis-ci.org/mikegthc/testcafe-reporter-ninjareporter)

This is the **ninjareporter** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).

<p align="center">
    <img src="https://raw.github.com/mikegthc/testcafe-reporter-ninjareporter/master/media/preview.png" alt="preview" />
</p>

## Install

```
npm install testcafe-reporter-ninjareporter
```

## Usage

When you run tests from the command line, specify the reporter name by using the `--reporter` option:

```
testcafe chrome 'path/to/test/file.js' --reporter ninjareporter
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('ninjareporter') // <-
    .run();
```

## Author
 
