/* global describe, it, before */
const chai = require('chai');
const list = require('../dist/list.cjs');
const categories = require('../dist/categories.cjs');

chai.expect();

const expect = chai.expect;

describe('icon list', () => {
  it('is an array and not empty', () => {
    expect(list)
      .to.be.an('array').that.is.not.empty;
  });
  // it('object has array of categories and not empty', () => {
  //   expect(icons.categories)
  //     .to.be.an('array').that.is.not.empty;
  // });
});

describe('icon categories', () => {
  it('is an array and not empty', () => {
    expect(categories)
      .to.be.an('array').that.is.not.empty;
  });
  it('array contain object of icons', () => {
    expect(categories[0])
      .to.be.an('object').to.have.property('icons');
  });
});
