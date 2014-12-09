'use strict';

angular.module('4screens.common').factory( 'CommonSocketService',
  function( $rootScope, CONFIG ) {
    return {
      get: function( namespace ) {
        var socket = io.connect(CONFIG.backend.domain + namespace);

        return {
          on: function( eventName, callback ) {
            socket.on( eventName, function () {
              var args = arguments;
              $rootScope.$apply(function () {
                if( callback ) {
                  callback.apply( socket, args );
                }
              });
            });
          },
          emit: function ( eventName, data, callback ) {
            socket.emit( eventName, data, function () {
              var args = arguments;
              $rootScope.$apply(function () {
                if( callback ) {
                  callback.apply( socket, args );
                }
              });
            });
          }
        };
      }
    };
  }
);
