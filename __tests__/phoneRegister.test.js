'use strict';

const PhoneRegister = require('../phoneRegister');
const phones = require('../phones.json');

describe('Testing constructor', ()=>{
    // test('Test 1: object created with given data',()=>{
    //     const register = new PhoneRegister(phones);
    //     expect(register.phoneRegister).toEqual(phones);
    // }); Check from the testcases.md why this test is not performed!

    test('Test 2: missing parameter throws an exception',()=>{
        expect(() => new PhoneRegister()).toThrow('phone data missing');
    });
});

describe ('Testing method getType', () => {

    test ('Test 1: use default data', () => {
        const register = new PhoneRegister(phones);
        expect(register.getTypes()).toEqual(["home", "work", "cell"]); 
        // expect(register.getTypes().sort()).toEqual(["home", "work", "cell"].sort()); 
        //toEqual when it's array/object toBe will be the same. Check jest documentation
    });

    test ('Test 2: with custom data', () => {
        const testData = [
            {
              "firstname": "Sheldon",
              "lastname": "Cooper",
              "phone": [
                { "type": "work", "number": "747347767" },
                { "type": "work", "number": "747983312" }
              ]
            }
          ];
        const register = new PhoneRegister(testData);
        expect(register.getTypes()).toEqual(["work"]); 
    });

    test('Test 3: no persons in phone register', () => {
        const register = new PhoneRegister([]);
        expect(register.getTypes()).toEqual([]);
    });

    describe('persons have no phones', () => {
        test('Test 4: no phone field present', () => {
            const testData = [
                {
                  "firstname": "Sheldon",
                  "lastname": "Cooper"
                },
                {
                  "firstname": "Leonard",
                  "lastname": "Hofstadter"
                }
              ];
              const register = new PhoneRegister(testData);
            expect(register.getTypes()).toEqual([]);
        });

        test('Test 5: phone array is empty', () => {
            const testData = [
                {
                    "firstname": "Sheldon",
                    "lastname": "Cooper",
                    "phone": []
                },
                {
                    "firstname": "Leonard",
                    "lastname": "Hofstadter",
                    "phone": []
                }
            ]
            const register = new PhoneRegister(testData);
            expect(register.getTypes()).toEqual([]);
        });
    });

    test('Test 6: Phone object has no type', () => {
        const testData = [
            {
              "firstname": "Sheldon",
              "lastname": "Cooper",
              "phone": [
                { "type": "home", "number": "818979934" },
                { "type": "", "number": "747347767" },
                { "type": null, "number": "747983312" },
                { "number": "019487481" }
              ]
            }
          ]
          const register = new PhoneRegister(testData);
          expect(register.getTypes()).toEqual(["home"]); 
    });
});