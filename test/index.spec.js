/* global describe, it, before */
import chai from 'chai';
import icons from '../';

chai.expect();

const expect = chai.expect;

describe('icon list', () => {
  it('is an array and not empty', () => {
    expect(icons)
      .to.be.an('array').that.is.not.empty;
  });
  it('has object with name and unicode key', () => {
    expect(icons[0])
      .to.be.an('object').that.has.all.keys('name', 'unicode');
  });
});
