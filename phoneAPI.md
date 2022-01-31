# Phone API

## Data

Data will be in a json file

### phones.son

```json
[
  {
    "firstname": "Sheldon",
    "lastname": "Cooper",
    "phone": [
      { "type": "home", "number": "818979934" },
      { "type": "work", "number": "747347767" },
      { "type": "cell", "number": "019487481" }
    ]
  },
  {
    "firstname": "Leonard",
    "lastname": "Hofstadter",
    "phone": [
      { "type": "home", "number": "824684920" },
      { "type": "work", "number": "747678301" },
      { "type": "cell", "number": "084928482" }
    ]
  }
]
```

## Class PhoneRegister

Persons are uniquely identified by firstname and lastname. There can't be two persons with the same name.

## **constructor(data)**

Phones json array is passed as a paramater `data`. If the parameter is missing, throws an exception `'phone data missing'`.

## **getTypes()**

returns all phone types in an array. Tye type is added to the result array only once. If there are no phones or no persons, an empty array is returned.

For example:

```json
["home", "work", "cell"]
```

## **getPersonsNumbersByType(firstname,lastname,type)**

Method returns an array of phone numbers of the given `type` belonging to given person with given `firstname` and `lastname`:

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty array [] is returned.
If at least one parameter is missing an exception `'parameter missing'` is thrown.

For example Sheldon Cooper and work:

```js
["747347767"];
```

## **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type. If no number of given type is found, returns an empty array [].

If a person has multiple numbers of the same type, each of them will be in it's own object.

If a parameter `type` is missing, an exception `'parameter missing'` is thrown.

The format of the returned array of object is:

```json
[
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } },
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } }
]
```

### Example type work:

```json
[
  {
    "firstname": "Sheldon",
    "lastname": "Cooper",
    "number": { "type": "work", "tel": "747347767" }
  },
  {
    "firstname": "Leonard",
    "lastname": "Hofstadter",
    "number": { "type": "work", "tel": "747678301" }
  }
]
```

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
If all phones are missing, an empty array [] is returned.
If all persons are missing, an empty array [] is returned.

## **getName(number)**

The method searches the given phone number from the telephone registry. If the number is found, the method returns an json object of form:
```json
{"firstname": "", "lastname": ""}
```

If no phone with given number is found, the method returns `null`.
If the parameter is missing `null` is also returned.

### Example who has number "019487481"

The return value will be:
```json
{"firstname": "Sheldon", "lastname": "Cooper"}
```