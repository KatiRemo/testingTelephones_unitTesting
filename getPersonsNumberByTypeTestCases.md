# Test cases

## **getPersonsNumbersByType(firstname,lastname,type)**

Method returns an array of phone numbers of the given `type` belonging to given person with given `firstname` and `lastname`:

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty array [] is returned.
If at least one parameter is missing an exception `'parameter missing'` is thrown.

getPersonsNumbersByType("Sheldon","Cooper") expection `'missing parameter'`
getPersonsNumbersByType("Leonard") expection `'missing parameter'`
getPersonsNumbersByType() expection `'missing parameter'`

If no person with given name is found
getPersonsNumbersByType("Sheldon","x","home") [] is returned
getPersonsNumbersByType("x","Cooper","home") [] is returned

If no number with given type z is found [] is returned
getPersonsNumbersByType("Leonard","Hofstadter","z") [] is returned

Before tests create register -object from the PhoneRegister class with the default data

## Test 1: get with parameters Sheldon, Cooper, work

```js
register.getPersonsNumbersByType("Sheldon", "Cooper", "work");
```

returns

```json
["747347767", "747983312"]
```

## Test 2: get with parameters Leonard, Hofstadter, cell

```js
register.getPersonsNumbersByType("Leonard", "Hofstadter", "cell");
```

returns

```json
["084928482"]
```

## Test 3: wrong type or name returns an empty array

```js
register.getPersonsNumbersByType("Sheldon", "Cooper", "x");
register.getPersonsNumbersByType("Sheldon", "x", "home");
register.getPersonsNumbersByType("x", "Cooper", "home");
```

returns

```json
[]
```

## Test 4: wrong type or name returns an empty array

```js
register.getPersonsNumbersByType("Sheldon", "Cooper", "x");
register.getPersonsNumbersByType("Sheldon", "x", "cell");
register.getPersonsNumbersByType("x", "Cooper", "cell");
register.getPersonsNumbersByType("x", "y", "z");
```

returns []

## Test 5: missing parameter throws an exception

```js
register.getPersonsNumbersByType("Sheldon", "Cooper");
register.getPersonsNumbersByType("Sheldon");
register.getPersonsNumbersByType();
```

Throws an expection `'missing parameter'`
