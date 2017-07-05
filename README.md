# cwtools
> Tools for node development

[![NPM Version][npm-img]][npm-link]
[![Licence][licence-img]][licence-link]
[![Build Status][travis-img]][travis-link]
[![Coverage Status][codecov-img]][codecov-link]
[![Dependency Status][gemnasium-img]][gemnasium-link]


## Install

```
$ yarn global add cwtools
```


## Usage

```
$ cwtools --help

  Usage
    $ cwtools <command> <options>

  Commands
    release <version>

      Version can be:
        patch | minor | major | prepatch | preminor | premajor | prerelease | 1.2.3

      Options
        --any-branch       Allow publishing from any branch
        --skip-test        Skip cleanup and testing
        --changelog-preset Use `conventional-changelog`
        --tag              Publish under a given dist-tag

  Examples
    $ cwtools release patch
    $ cwtools release 1.0.2
    $ cwtools release 1.0.2-beta.3 --tag=beta
```


[npm-img]: https://img.shields.io/npm/v/cwtools.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/cwtools

[licence-img]: https://img.shields.io/npm/l/cwtools.svg?style=flat-square
[licence-link]: LICENCE.md

[travis-img]: https://img.shields.io/travis/colisweb/cwtools.svg?style=flat-square
[travis-link]: https://travis-ci.org/colisweb/cwtools

[codecov-img]: https://img.shields.io/codecov/c/github/colisweb/cwtools/master.svg?style=flat-square
[codecov-link]: https://codecov.io/github/colisweb/cwtools?branch=master

[gemnasium-img]: https://img.shields.io/gemnasium/colisweb/cwtools.svg?style=flat-square
[gemnasium-link]: https://gemnasium.com/github.com/colisweb/cwtools
