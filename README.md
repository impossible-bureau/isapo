# isapo

A very tiny function for testing zipcodes and state codes to determine if they're APO (Military). Sometimes you just need to know if it's APO! Some companies only ship using USPS if the destination is APO, and this little method allows you to check without having to hit the USPS shipping estimate api which saves a small bit of time and removes one step in running constant shipping estimates.

[![Build Status](https://travis-ci.org/impossible-bureau/isapo.svg?branch=master)](https://travis-ci.org/impossible-bureau/isapo) [![dependencies Status](https://david-dm.org/impossible-bureau/isapo/status.svg)](https://david-dm.org/impossible-bureau/isapo) [![devDependencies Status](https://david-dm.org/impossible-bureau/isapo/dev-status.svg)](https://david-dm.org/impossible-bureau/isapo?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Simple example of how to use isapo library**

It's simple!

```
import isZipAPO, { isStateAPO } from '../src';

isApo(340345) // returns true
isApo(84111) // returns false

isZipApo('WA') // returns false
isZipApo('AA') // returns true
```

# Features

* **ES6/ESNext** - Write _ES6_ code and _Babel_ will transpile it to ES5 for backwards compatibility
* **Test** - _Mocha_ with _Istanbul_ coverage
* **Lint** - Preconfigured _ESlint_ with _Airbnb_ config
* **CI** - _TravisCI_ configuration setup
* **Minify** - Built code will be minified for performance

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

# License

MIT © Impossible Bureau
