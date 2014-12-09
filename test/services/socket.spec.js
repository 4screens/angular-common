'use strict';

describe( '4screens.common', function() {
  var CommonSocketService
    , CONFIGMock;

  beforeEach( module('4screens.common') );

  // Here we create a dummy/mock service, to determine if they were caused.
  beforeEach( function() {
    CONFIGMock = {
      'backend': {
        'domain': ''
      }
    };
    module(function( $provide ) {
      $provide.value( 'CONFIG', CONFIGMock );
    });
  } );

  beforeEach( inject(function( _CommonSocketService_, _CONFIG_ ) {
    CommonSocketService = _CommonSocketService_;
  }));

  describe( 'socket service', function() {

    it( 'should be defined', function() {
      expect( CommonSocketService ).toBeDefined();
    });

    it( 'should respond to get method', function() {
      expect( CommonSocketService.get ).toBeDefined();
    });

    it( 'should respond to get.on method', function() {
      expect( CommonSocketService.get().on ).toBeDefined();
    });

    it( 'should respond to get.emit method', function() {
      expect( CommonSocketService.get().emit ).toBeDefined();
    });

  });

});