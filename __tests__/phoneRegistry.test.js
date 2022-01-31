'use strict';

const PhoneRegistry = require('../phoneRegistry');
const phones = require('../phones.json');

describe('Testing constructor', () => {
    test('Test 1: object created with given data', () => {
        const registry = new PhoneRegistry(phones);
        expect(registry.phoneRegistry).toEqual(phones);
    });
    test('Test 2: missing parameter throws an exception', () => {
        expect(() => new PhoneRegistry()).toThrow('phone data missing');
    });
});