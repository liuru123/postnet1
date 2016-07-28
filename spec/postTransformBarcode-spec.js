'use strict';
describe("isInvalidLength",function () {
  it("return true", function () {
    let inputPost = '12345';
    let result = isInvalidLength(inputPost);
    let expected = true;
    expect(result).toEqual(expected);
  });
  it("return false", function () {
    let inputPost = '134442-2';
    let result = isInvalidLength(inputPost);
    let expected = false;
    expect(result).toEqual(expected);
  });
 });
describe("isCorrectChar",function () {
  it("return true",function () {
    let inputPost='12345-2231';
    let result=isCorrectChar(inputPost);
    let expected=true;
    expect(result).toEqual(expected);

  });
  it("return false",function () {
    let inputPost='12-233442';
    let result=isCorrectChar(inputPost);
    let expected=false;
    expect(result).toEqual(expected);
  });
});
describe("isNumber",function () {
  it("return true",function () {
    let inputPost='12345-22-';
    let result=isNumber(inputPost);
    let expected=true;
    expect(result).toEqual(expected);
  });
  it("return false" ,function () {
    let inputPost='223ccdd';
    let result=isNumber(inputPost);
    let expected=false;
    expect(result).toEqual(expected);
  });
});
describe("divideArray",function () {
  it("should return the numberArray",function () {
    let inputPost='12345-2344';
    let result=divideArray(inputPost);
    let expected=[1,2,3,4,5,2,3,4,4];
    expect(result).toEqual(expected);
  });
});

describe("computeCD",function () {
  it("return the cd",function () {
    let numberArray=[1,2,3,4,5,2,3,4,4];
    let result=computeCD(numberArray);
    let expected=[1,2,3,4,5,2,3,4,4,2];
    expect(result).toEqual(expected);
  });
});

describe('matchBarcode',function () {
  it("return the barcode",function () {
    let numberArray=[1,2,3,4,5,2,3,4,4,2];
    let items=['||:::', ':::||',
      '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
    let result=matchBarcode(numberArray,items);
    let expected=[':::||','::|:|','::||:',':|::|',':|:|:','::|:|','::||:',':|::|',':|::|','::|:|'];
    expect(result).toEqual(expected);
  });
});
describe("formattedBarcode",function () {
  it("return the merged string",function () {
    let stringArray=[':::||','::|:|','::||:',':|::|',':|:|:','::|:|','::||:',':|::|',':|::|','::|:|'];
    let result=formattedBarcode(stringArray);
    let expected='|:::||::|:|::||::|::|:|:|:::|:|::||::|::|:|::|::|:||';
    expect(result).toEqual(expected);
  });
});

describe("postTransformBarcode",function () {
  it("should return the result",function () {
    let inputPost='12345-2344';
    let result=postTransformBarcode(inputPost);
    let expected='|:::||::|:|::||::|::|:|:|:::|:|::||::|::|:|::|::|:||';
    expect(result).toEqual(expected);
  });
  it("should return the error information",function () {
    let inputPost='123';
    let result=postTransformBarcode(inputPost);
    let expected='the input is error';
    expect(result).toEqual(expected);
  });
});