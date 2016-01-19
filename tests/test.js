var expect = require('chai').expect;

it('truthyness', function() {
  expect(true).to.be.true;
});

it('arrays have length', function(done) {
  var array = [1,2,3];
  setTimeout(function() {
  expect(array.length).to.exist;
  done();
  }, 10);
});

it('hello should return world', function() {
  var hello = require('./index');

  expect(hello()).to.equal('world');
});
