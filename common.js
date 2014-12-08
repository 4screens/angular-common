/*
 4screens-settings v0.0.1
 (c) 2014 Nopattern sp. z o.o.
 License: proprietary
*/
'use strict';

angular.module( '4screens.common', [] );

angular.module('4screens.common').factory( 'CommonSocketService',
  function() {
    return {
      hello: function() {
        return 'world';
      }
    };
  }
);