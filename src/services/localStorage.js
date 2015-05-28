'use strict';

angular.module('4screens.common').provider( 'CommonLocalStorageService', function() {
    var mock = false;

    this.mock = function() {
      mock = true;
    };

    this.$get = function( localStorageService ) {
      var mockedStore = {};
      return {
        get: function( key ) {
          if (mock) {
            return mockedStore[key];
          }
          return localStorageService.get( key );
        },
        set: function( key, value ) {
          if (mock) {
            mockedStore[key] = value;
          } else {
            localStorageService.set( key, value );
          }
        },
        clearAll: function( regex ) {
          return localStorageService.clearAll( regex );
        }
      };
    };
  }
);
