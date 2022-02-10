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

describe ('Testing method getTypes', () => {

    test ('Test 1: use default data', () => {
        const register = new PhoneRegister(phones);
        expect(register.getTypes()).toEqual(["home", "work", "cell"]); 
        // expect(register.getTypes().sort()).toEqual(["home", "work", "cell"].sort()); 
        //toEqual when it's array/object toBe will be the same. Check jest documentation
    });

    test ('Test 2: use custom data', () => {
        const testData = [
            {
              "firstname": "Sheldon",
              "lastname": "Cooper",
              "phones": [
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

        test('Test 5: phones array is empty', () => {
            const testData = [
                {
                    "firstname": "Sheldon",
                    "lastname": "Cooper",
                    "phones": []
                },
                {
                    "firstname": "Leonard",
                    "lastname": "Hofstadter",
                    "phones": []
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
              "phones": [
                { "type": "home", "number": "818979934" },
                { "type": "", "number": "747347767" },
                { "type": null, "number": "747983312" },
                { "number": "019487481" }
              ]
            }
          ];
          const register = new PhoneRegister(testData);
          expect(register.getTypes()).toEqual(["home"]); 
    });
});

describe('testing method getTypes test.each version', () => {
    const testData = require ('../getTypecases.json');

    test('Test 6 version 2', () => {
        const register = new PhoneRegister(testData.test6);
          expect(register.getTypes()).toEqual(["home"]); 
    });

    // const testValues = [
    //     //a             expected
    //     [testData.test2,["work"]],
    //     [testData.test3, []],
    //     [testData.test4, []],
    // ];

    // test.each(testValues)('testing...', (a, expected) => {
    //     const register = new PhoneRegister(a);
    //     expect(register.getTypes()).toEqual(expected);
    // });

    // test.each(testValues)('testing %s', (text, a, expected) => {
    //     const register = new PhoneRegister(a);
    //     expect(register.getTypes()).toEqual(expected); 
    // });
  });

describe('testing method getPersonsNumbersByType(firstname, lastname,type)', () => {
  const register = new PhoneRegister(phones);

  test ('test 1: get with parameters Sheldon, Cooper, work', () => {
    expect(register.getPersonsNumbersByType('Sheldon', 'Cooper', 'work'))
    .toEqual(["747347767", "747983312"]);
  });

  describe('Tests 2-4: getPersonsNumbersByType', () => {
    const testValues = [
      //firstname, lastname, type, expected
      ['Sheldon', 'Cooper', 'cell', ["019487481"]],
      ['Sheldon', 'Cooper', 'home', ["818979934"]],
      ['Sheldon', 'Cooper', 'x', []],
      ['Sheldon', 'x', 'cell', []],
      ['x', 'Cooper', 'cell', []],
      ['x', 'y', 'z', []]
    ];
    test.each(testValues)('getPersonsNumbersByType("%s","%s","%s") returns %s',
    (firstname, lastname, type, expected) => {
      expect(register.getPersonsNumbersByType(firstname, lastname, type))
      .toEqual(expected);
    });
  });

  describe('Test 5: missing parameter throws an exception', () => {
      test('one parameter missing', () => {
        expect(() => register.getPersonsNumbersByType('Sheldon', 'Cooper'))
        .toThrow('missing parameter');
      });
      test('two parameters missing', () => {
        expect(() => register.getPersonsNumbersByType('Sheldon'))
        .toThrow('missing parameter');
      });
      test('all parameters missing', () => {
        expect(() => register.getPersonsNumbersByType())
        .toThrow('missing parameter');
      });
    });
}); //end of getPersonsNumbersByType tests

describe('testing method getAllNumbersByType(type)', () => {
  const register = new PhoneRegister(phones);

  test ('test 1: getAllNumbersByType with types home, cell and work', () => {
    expect(register.getPersonsNumbersByType('Sheldon', 'Cooper', 'work'))
    .toEqual(["747347767", "747983312"]);
  });
});