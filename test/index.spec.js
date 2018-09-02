/* global describe, it, before */
const chai = require('chai');
const icons = require('../');

chai.expect();

const expect = chai.expect;

describe('icon list', () => {
  it('is an object and not empty', () => {
    expect(icons)
      .to.be.an('object').that.is.not.empty;
  });
  it('object has array of categories and not empty', () => {
    expect(icons.categories)
      .to.be.an('array').that.is.not.empty;
  });
});
