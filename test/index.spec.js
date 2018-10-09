/* global describe, it, before */
const chai = require('chai');
const icons = require('../data/icons.json');

chai.expect();

const expect = chai.expect;

describe('icons', () => {
  it('is an object with categories', () => {
    expect(icons).to.be.an('object').to.have.property('categories');
  });
  it('`.categories` is not an empty array', () => {
    expect(icons.categories).to.be.an('array').that.is.not.empty;
  });
  it('`.categories` has icons (non empty array) and name (string)', () => {
    icons.categories.every(i => {
      expect(i).to.be.an('object').that.has.all.keys('icons', 'name');
      expect(i.icons).to.be.an('array').that.is.not.empty;
      expect(i.name).to.be.an('string');
    });
  });
});

