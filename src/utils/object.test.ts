import {
  convertNullToEmptyString,
  isObjEmpty,
  // mapArrObjToSelectOptions,
  nestedSet,
  omitPropertiesByKeys,
  pickPropertiesByKeys,
} from './object';

describe('utils/object', () => {
  describe('isObjEmpty', () => {
    it('should return true if object is undefined', () => {
      const data = undefined;

      expect(isObjEmpty(data)).toBe(true);
    });

    it('should return true if object is empty', () => {
      const data = {};

      expect(isObjEmpty(data)).toBe(true);
    });

    it('should return false if object is not empty', () => {
      const data = { foo: 'bar' };

      expect(isObjEmpty(data)).toBe(false);
    });
  });

  // describe('mapArrObjToSelectOptions', () => {
  //   it('should return {label: string, value: string}', () => {
  //     const arr = [
  //       { key: 'fooKey', value: 'fooValue' },
  //       { key: 'barKey', value: 'barValue' },
  //     ];

  //     const expected = [
  //       { label: 'fooKey', value: 'fooValue' },
  //       { label: 'barKey', value: 'barValue' },
  //     ];

  //     expect(mapArrObjToSelectOptions('key', 'value', arr)).toMatchObject(expected);
  //   });
  // });

  describe('convertNullToEmptyString', () => {
    it('should replace all null value with empty string', () => {
      const obj = {
        foo: null,
        foobar: 'nullfoobar',
        bar: {
          baz: null,
          qux: {
            quux: 'quux',
            corge: null,
          },
        },
        grault: 0,
      };

      expect(convertNullToEmptyString(obj)).toMatchObject({
        foo: '',
        foobar: 'nullfoobar',
        bar: {
          baz: '',
          qux: {
            quux: 'quux',
            corge: '',
          },
        },
        grault: 0,
      });
    });
  });

  describe('pickPropertiesByKeys', () => {
    it('should return only fields base on keys', () => {
      const obj = {
        foo: 'foo',
        bar: 'bar',
        baz: 'baz',
        foobar: {
          foo: 'foo',
          bar: 'bar',
        },
      };

      const keys = ['foo', 'foobar'];

      expect(pickPropertiesByKeys(keys, obj)).toMatchObject({
        foo: 'foo',
        foobar: { foo: 'foo', bar: 'bar' },
      });
    });
  });

  describe('omitPropertiesByKeys', () => {
    it('should remove properties from object', () => {
      const obj = {
        foo: 'foo',
        bar: 'bar',
        baz: 'baz',
        foobar: {
          foo: 'foo',
          bar: 'bar',
        },
      };

      const keys = ['bar', 'baz'];

      expect(omitPropertiesByKeys(keys, obj)).toMatchObject({
        foo: 'foo',
        foobar: { foo: 'foo', bar: 'bar' },
      });
    });
  });

  describe('nestedSet', () => {
    it('should update the value on that particularly nested key', () => {
      const obj = {
        foo: 'foo',
        bar: {
          foobar: 'foobar',
        },
      };

      expect(nestedSet(obj, 'bar.foobar', 'new value')).toMatchObject({
        foo: 'foo',
        bar: {
          foobar: 'new value',
        },
      });
    });

    it('should create new key-value if key doesn`t match', () => {
      const obj = {
        foo: 'foo',
        bar: {
          foobar: 'foobar',
        },
      };

      expect(nestedSet(obj, 'baz.foobaz', 'new foobaz')).toMatchObject({
        foo: 'foo',
        bar: {
          foobar: 'foobar',
        },
        baz: {
          foobaz: 'new foobaz',
        },
      });
    });
  });
});
