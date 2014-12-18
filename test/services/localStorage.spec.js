'use strict';

describe( '4screens.common', function() {
  var CommonLocalStorageService
    , localStorageServiceMock;

  beforeEach( module('4screens.common') );

  // Here we create a dummy/mock service, to determine if they were caused.
  beforeEach( function() {
    localStorageServiceMock = {
      data: {
        'key': 'value'
      },
      get: function( key ) {
        return localStorageServiceMock.data[ key ];
      },
      set: function( key, value ) {
        localStorageServiceMock.data[ key ] = value;
      }
    };
    module(function( $provide ) {
      $provide.value( 'localStorageService', localStorageServiceMock );
    });
  } );

  beforeEach( inject(function( _CommonLocalStorageService_ ) {
    CommonLocalStorageService = _CommonLocalStorageService_;
  }));

  describe( 'localStorage service', function() {

    it( 'should be defined', function() {
      expect( CommonLocalStorageService ).toBeDefined();
    });

    it( 'should respond to get method', function() {
      expect( CommonLocalStorageService.get ).toBeDefined();
    });

    it( 'should respond to set method', function() {
      expect( CommonLocalStorageService.set ).toBeDefined();
    });

    it( 'should get data from storage', function() {
      expect( CommonLocalStorageService.get('key') ).toBe('value');
    });

    it( 'should set data to storage', function() {
      CommonLocalStorageService.set( 'key', 'newValue' );
      expect( CommonLocalStorageService.get('key') ).toBe('newValue');
    });

  });

});