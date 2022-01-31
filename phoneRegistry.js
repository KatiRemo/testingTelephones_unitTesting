'use strict';

module.exports = class PhoneRegistry {
    constructor(data){
        if(!data) throw new Error('phone data missing');
        this.PhoneRegistry=data;
    }
 }