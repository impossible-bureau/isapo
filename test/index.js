import { assert } from 'chai';
import isZipAPO, { isStateAPO } from '../src';

describe('Testing zip codes and state abbreviations.', () => {
  it('Should be APO', () => {
    const expectedVal = true;
    assert(isZipAPO('098123') === expectedVal, '098 prefixes should test true');
  });

  it('340123 Should be APO', () => {
    const expectedVal = true;
    assert(isZipAPO('340123') === expectedVal, '340 prefixes should test true');
  });

  it('84111 Should not be APO', () => {
    const expectedVal = false;
    assert(isZipAPO('84111') === expectedVal, '84111 is in Utah and NOT APO');
  });

  it('AA should be APO', () => {
    const expectedVal = true;
    assert(isStateAPO('AA') === expectedVal, 'AA is a military state code and should test true');
  });

  it('AE should be APO', () => {
    const expectedVal = true;
    assert(isStateAPO('AE') === expectedVal, 'AA is a military state code and should test true');
  });

  it('OR should not be APO', () => {
    const expectedVal = false;
    assert(isStateAPO('OR') === expectedVal, 'OR is NOT a military state code and should test false');
  });
});
