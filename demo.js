'use strict';

const phones = [
            {"type": "home", "number":"818979934"},
            {"type": "", "number":"747347767"},
            {"type": null, "number":"747983312"},
            {"number":"019487481"}
        ];

const result = [];
for (let phone of phones) {
    result.push(phone.type);
}

console.log(result);