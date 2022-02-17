# Test Cases

## **getName(number)**

The method searches the given phone number from the telephone registry. If the number is found, the method returns an json object of form:

```json
{ "firstname": "", "lastname": "" }
```

If no phone with given number is found, the method returns `null`.
If the parameter is missing `null` is also returned.

Create register object from PhoneRegister class with default data to be used in all tests.

### Test 1: Get name for the number "019487481"

```js
register.getName('019487481')*;
```

The returned value will be:

```json
{ "firstname": "Sheldon", "lastname": "Cooper" }
```

### Test 2: Get names by number from default data

```js
const testValues = [
  ["818979934", { firstname: "Sheldon", lastname: "Cooper" }],
  ["084928482", { firstname: "Leonard", lastname: "Hofstadter" }],
  ["824684920", { firstname: "Leonard", lastname: "Hofstadter" }],
];
```

### Test 3: Wrong number

Call

```js
register.getName("01010101");
```

returns `null`

### Test 4: Parameter missing

Call

```js
register.getName();
```

returns `null`

### Test 5: Wrong type

Call

```js
register.getName(1234);
```

returns `null`
