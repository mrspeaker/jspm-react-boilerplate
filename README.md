# JSPM/ReactJS boilerplate

Simplest setup for JSPM using ECMAScript 6 (via Babel) and ReactJS (with JSX)

[jspm](http://jspm.io/): package manager for the SystemJS universal module loader, built on top of the dynamic ES6 module loader.

[React](https://facebook.github.io/react/index.html): A JavaScript library for building user interfaces.

## Usage

  1. Duplicate folder
  2. `jspm install`
  3. Serve the directory (live-server, or http-server, or whatever)

## NOTE NOTE NOTE!

JSX support temporarily busted! Dirty hack: run `jspm install` then search for `b.blacklist.push("react")` in `es6-module-loader.js`. Remove that expression and you're good to go. Will hopefully [be resolved](https://github.com/jspm/jspm-cli/issues/580) soon.
