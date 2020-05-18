'use strict';

describe('bank-tech-test', function() {

  describe('Check Jasmine is working', function() {
    var bank = new Bank();
    it('It creates a new instance of the bank function', function() {
      expect(bank).toEqual(bank);
    });
  });

});