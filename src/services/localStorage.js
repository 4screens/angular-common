'use strict';

angular.module('4screens.common').factory( 'CommonLocalStorageService',
  function( localStorageService ) {
    return {
      get: function( key ) {
        return localStorageService.get( key );
      },
      set: function( key, value ) {
        localStorageService.set( key, value );
      }
    };
  }
);
