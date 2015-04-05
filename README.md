# JSPM/ReactJS boilerplate

Simple(est) setup for JSPM projects using the new version of JavaScript (es2015, via the Babel transpiler) with React (including support for their JSX tags).

[jspm](http://jspm.io/): package manager for the SystemJS universal module loader, built on top of the dynamic ES6 module loader.

[React](https://facebook.github.io/react/index.html): A JavaScript library for building user interfaces.

## Usage

  1. Duplicate folder
  2. Remove git info (`rm -rf .git`)
  3. `jspm install`
  4. Serve the directory (live-server, or http-server, or whatever)

## What's in the boilerplate?

Not much... this is the minimum amount of stuff to required to get ES2015 + React. This repo is mostly so I don't have to remember to include the System and config files.

  1. jspm init + default options + (-traceur + babel)
  2. Add `blacklist: []` to allow jsx
  3. Add template index page
  3.5 jspm System & config includes
  5. Add default src directory
