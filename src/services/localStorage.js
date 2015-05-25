'use strict';

angular.module('4screens.common').provider( 'CommonLocalStorageService', function() {
    var mock = false;
    var mockedStore = {};

    this.mock = function() {
      mock = true;
    };

    this.$get = function(localStorageService) {
      return {
        get: function(key) {
          if (mock) {
            return mockedStore[key];
          }
          return localStorageService.get(key);
        },
        set: function(key, value) {
          if (mock) {
            mockedStore[key] = value;
          } else {
            localStorageService.set(key, value);
          }
        }
      };
    }
  }
);
