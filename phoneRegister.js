'use strict';

module.exports = class PhoneRegister {
    constructor(data){
        if (!data) throw new Error('phone data missing');
        this.phoneRegister=data;
    }
 }