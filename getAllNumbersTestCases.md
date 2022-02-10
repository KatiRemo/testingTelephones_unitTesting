# Test cases

## **getAllNumbers()**

Returns all phone numbers in an array, each as an object in form:

```json
{ "firstname": "", "lastname": "", "phone": [] }
```

The phone object in phone array is of form:

```json
{ "type": "", "number": "" }
```

If a person has no phone (the phone field is an empty array or there is no phone field), then this person is not added into the result array.
If all phones are missing or phones array is empty, an empty array [] is returned.
If all persons are missing, an empty array [] is returned.

### Test 1: test with default data

before testing create a register object from PhoneRegister class with default data.

```js
register.getAllNumbers();
```

returns the default json array.

### Test 2: test some phones missing

before testing create a register object from PhoneRegister class with

```json
[
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
]
```

```js
register.getAllNumbers();
```

returns

```json
[
  {
    "firstname": "Leonard",
    "lastname": "Hofstadter",
    "phones": [
      { "type": "home", "number": "824684920" },
      { "type": "work", "number": "747678301" },
      { "type": "cell", "number": "084928482" }
    ]
  }
]
```

### Test 3: Test all phones missing

before testing create a register object from PhoneRegister class with

```json
[
  {
    "firstname": "Sheldon",
    "lastname": "Cooper",
    "phones": []
  },
  {
    "firstname": "Leonard",
    "lastname": "Hofstadter"
  }
]
```

```js
register.getAllNumbers();
```

returns []

### Test 4: Test all persons are missing

before testing create a register object from PhoneRegister class with empty array []

```js
register.getAllNumbers();
```

returns []