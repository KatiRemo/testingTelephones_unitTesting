# Test cases

## **getTypes()**

returns all phone types in an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] is returned.

Before test create phoneRegister object from the class PhoneRegister.

### Test 1: use default data

get types of the default data
returns

#### Test data

```json
["home", "work", "cell"]
```

### Test 2: with custom data

get types of the given data where only one type of phone exists

#### Test data

```json
[
  {
    "firstname": "Sheldon",
    "lastname": "Cooper",
    "phone": [
      { "type": "work", "number": "747347767" },
      { "type": "work", "number": "747983312" }
    ]
  }
]
```

returns

```json
["work"]
```

### Test 3: no persons in phone register

#### Test data

```json
[]
```

returns an empty array

```json
[]
```

### Test 4: persons have no phones - no phone field present

#### Test data

No phone field present

```json
[
  {
    "firstname": "Sheldon",
    "lastname": "Cooper"
  },
  {
    "firstname": "Leonard",
    "lastname": "Hofstadter"
  }
]
```

returns an empty array

```json
[]
```

### Test 5: persons have no phone - phone array is empty

#### Test data

phone array is empty

```
[
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
```

returns an empty array

```json
[]
```

### Test 6: Phone object has no type

Type is an empty string and one has no type defined at all
NOTE! This should not be possible!

#### Test data

```json
[
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
```

returns

```json
["home"] is the only array which would be returned.
The actual returned array would be the one below, but this should never be possible.
["home", " ", null, "undefined"]
```
