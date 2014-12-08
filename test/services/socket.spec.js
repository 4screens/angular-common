'use strict';

describe( '4screens.common', function() {
  var CommonSocketService;

  beforeEach( module('4screens.common') );

  beforeEach( inject(function( _CommonSocketService_ ) {
    CommonSocketService = _CommonSocketService_;
  }));

  describe( 'common service', function() {

    it( 'should be defined', function() {
      expect( CommonSocketService ).toBeDefined();
    });

    it( 'should respond to hello method', function() {
      expect( CommonSocketService.hello() ).toEqual('world');
    });

  });

});