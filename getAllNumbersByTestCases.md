# Test cases

## **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type. In no number of given type is found, returns an empty array [].

If a person has multiple numbers of the same type, each of them will be in it's own object.

If a parameter `type` is missing, an exception `'missing parameter'` will be thrown.

The format of the returned array of object is:
```json
[
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } },
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } }
]
```

Before tests create `register` -object from the `PhoneRegister` class with the default data

### Test 1: getAllNumbersByType with types home, cell and work

#### type home returns first phones of the phones array

returns:

```js
register.getAllNumbersByType("home");
```

```json[
    {
        "firstname": "Sheldon", "lastname": "Cooper", "number":{"818979934"}},
        "firstname": "Leonard","lastname": "Hofstadter","number":{"824684920"}}
]
```

#### type cell returns only one object in the array

```js
register.getAllNumbersByType("cell");
```

returns:

```json[
    {
        "firstname": "Sheldon", "lastname": "Cooper", "number":{"019487481"}},
        "firstname": "Leonard","lastname": "Hofstadter","number":{"084928482"}}
]
```

#### type work returns last and other items in the phones array

returns:

```json[
    {
        "firstname": "Sheldon", "lastname": "Cooper", "number":{"818979934"}},
        "firstname": "Sheldon", "lastname": "Cooper", "number":{"747347767"}},
        "firstname": "Leonard","lastname": "Hofstadter","number":{"747678301"}}
]
```

### Test 2: if type is missing throws an exception

```js
register.getAllNumbersByType();
```

throws an expection `¨missing parameter'`

### Test 3: if type does not exist returns an empty array
```js
register.getAllNumbersByType('x');
```
returns [];