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

  describe('test 1: testing individually', () => {
    test('type home returns first phones of the phones array', () => {
      const expected = [
        { "firstname": "Sheldon", "lastname": "Cooper", "number": { "type": "home", "tel": "818979934" } },
        {  "firstname": "Leonard", "lastname": "Hofstadter", "number": { "type": "home", "tel": "824684920"} }
      ];
      expect(register.getAllNumbersByType('home')).toEqual(expected);
    });
  
    test('type cell returns two objects in the array', () => {
      expect(register.getAllNumbersByType('cell')).toEqual([
        { "firstname": "Sheldon", "lastname": "Cooper", "number": { "type": "cell", "tel":"019487481"}},
        {  "firstname": "Leonard","lastname": "Hofstadter","number": { "type": "cell", "tel":"084928482"}}
      ]);
    });

    test('type work returns last and other items in the phones array', () => {
      const expected = [
        {"firstname": "Sheldon", "lastname": "Cooper", "number": { "type": "work", "tel":"747347767"}},
        {  "firstname": "Sheldon", "lastname": "Cooper", "number": { "type": "work", "tel":"747983312"}},
        {  "firstname": "Leonard","lastname": "Hofstadter","number": { "type": "work", "tel":"747678301"}}
      ];
      expect(register.getAllNumbersByType('work')).toEqual(expected);
    });

    test('if type does not exist returns an empty array', () => {
      expect(register.getAllNumbersByType('x')).toEqual([]);
    });
  }); //end of test 1: testing individually

  describe('Test 2: if type is missing throws an exception', () => {
    test('missing type throws an expection', () => {
      expect(() => register.getAllNumbersByType()).toThrow('missing parameter');
    });
  }); //end of test 2

  describe('Test 3: testing with test.each', () => {
    const expectedHome = [
      { "firstname": "Sheldon", "lastname": "Cooper", "number": { "type": "home", "tel": "818979934" } },
      {  "firstname": "Leonard", "lastname": "Hofstadter", "number": { "type": "home", "tel": "824684920"} }
    ];

    const expectedCell = [
      { "firstname": "Sheldon", "lastname": "Cooper", "number": { "type": "cell", "tel":"019487481"}},
      {  "firstname": "Leonard","lastname": "Hofstadter","number": { "type": "cell", "tel":"084928482"}}
    ];

    const expectedWork = [
      {"firstname": "Sheldon", "lastname": "Cooper", "number": { "type": "work", "tel":"747347767"}},
      {  "firstname": "Sheldon", "lastname": "Cooper", "number": { "type": "work", "tel":"747983312"}},
      {  "firstname": "Leonard","lastname": "Hofstadter","number": { "type": "work", "tel":"747678301"}}
    ];
    const testValues = [
      ['home', expectedHome],
      ['cell', expectedCell],
      ['work', expectedWork],
      ['x', []]
    ];

    test.each(testValues)('testing getAllNumbersByType("%s")', (type, expected) => {
      expect(register.getAllNumbersByType(type)).toEqual(expected);
    })
  })

}); //ending all getAllNumbersByType tests

describe('testing method getAllNumbers', () => {
  test('Test 1: test with default data', () => {
    const register = new PhoneRegister(phones);
    expect(register.getAllNumbers()).toEqual(phones);
  });

  test('Test 2: test some phones missing', () => {
    const testData = [
      {
        "firstname": "Sheldon",
        "lastname": "Cooper",
        "phones": []
      },
      {
        "firstname": "Leonard",
        "lastname": "Hofstadter",
        "phones": [
          { "type": "home", "number": "824684920" },
          { "type": "work", "number": "747678301" },
          { "type": "cell", "number": "084928482" }
        ]
      }
    ];
    const expectedResult = [
      {
        "firstname": "Leonard",
        "lastname": "Hofstadter",
        "phones": [
          { "type": "home", "number": "824684920" },
          { "type": "work", "number": "747678301" },
          { "type": "cell", "number": "084928482" }
        ]
      }
    ];
    const register = new PhoneRegister(testData);
    expect(register.getAllNumbers()).toEqual(expectedResult);
  });


}); //end of getAllNumbers