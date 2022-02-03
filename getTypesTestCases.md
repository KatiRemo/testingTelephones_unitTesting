# Test cases

## **getTypes()**

returns all phone types in an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] is returned.

- [] when there are no persons
- [] when no phones or phone type is not specified

Before test create phoneRegister object from the class PhoneRegister.

### Test 1: use default data

get types of the default data
returns

```json
["home", "work", "cell"]
```

### Test 2: with custom data

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
