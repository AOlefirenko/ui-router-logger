# ui-router-logger
[![npm version](https://img.shields.io/npm/v/ui-router-logger.svg?style=flat-square)](https://www.npmjs.org/package/ui-router-logger)
[![npm downloads](https://img.shields.io/npm/dm/ui-router-logger.svg?style=flat-square)](https://www.npmjs.org/package/ui-router-logger)
[![dev dependencies](https://img.shields.io/david/dev/AOlefirenko/ui-router-logger.svg?style=flat-square)](https://david-dm.org/AOlefirenko/ui-router-logger#)


Module logs all events from ui-router.

###Installation

####npm

    npm install ui-router-logger

####code

Just add this module to your application

    angular.module('yourAppName', ['ui-router-logger'])
    
or more complex example:

    var dependencies = [
        require('angular-ui-router')
    ];
    
    if(DEBUG) dependencies.push(require('ui-router-logger'));
    
    angular.module('yourAppName', dependencies)


###Credits

Actually I've cut it from this project https://github.com/tomastrajan/component-pattern-for-angular-js-1-x
