'use strict';

module.exports = class PhoneRegister {
    constructor(data){
        if (!data) throw new Error('phone data missing'); 
        //no else needed because the phase below will never be reached if data is missing
        this.phoneRegister=data;
    }
 }