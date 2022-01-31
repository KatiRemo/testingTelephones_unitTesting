# Test cases

## **constructor(data)**

Phones json array is passed as a paramater `data`. If the parameter is missing, throws an exception `'phone data missing'`.

### Test 1: object created with given data
```js
new PhoneRegister(jsonData);
```

test if the objects inner field of the created object has the same value as given as parameter. Parameter `jsondata` is the json array from the default file `phones.json`.

## Test 2: missing parameter throws an exception
```js
new PhoneRegister()
```
This will throw an excpetion `'phone data missing'`.

