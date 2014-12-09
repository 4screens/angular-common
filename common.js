/*
 4screens-common v0.0.1
 (c) 2014 Nopattern sp. z o.o.
 License: proprietary
*/
'use strict';

angular.module( '4screens.common', [] );

'use strict';

angular.module('4screens.common').factory( 'CommonSocketService',
  ["$rootScope", "CONFIG", function( $rootScope, CONFIG ) {
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
  }]
);
