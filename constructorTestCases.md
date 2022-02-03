# Test cases

## **constructor(data)**

Phones json array is passed as a paramater `data`. If the parameter is missing, throws an exception `'phone data missing'`.

### Test 1: object created with given data
```js
new PhoneRegister(jsonData);
```

test if the objects inner field of the created object has the same value as given as parameter. Parameter `jsondata` is the json array from the default file `phones.json`.

Note: Not good because we need to know something from the inner workings of the implementation. You could test this indirectly later with other tests. If this is not working most of other tests are not going to work either.
If we change the implementation and name the field differently, our test will fail. This is against the idea that we can change implementation how ever we like if we don't change the API.

If we have the field name described (fixed) in the API, then it is ok to test also. Then it can't be changed in the implementation.

## Test 2: missing parameter throws an exception
```js
new PhoneRegister()
```
This will throw an excpetion `'phone data missing'`.

