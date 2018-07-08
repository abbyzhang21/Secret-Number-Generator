'use strict';
module.exports = function() {
   const secretNumber = Math.random() * 1000001;
   const anotherSecretNumber = Math.random() * 1000001;
   return function(){
       return secretNumber;
       return anotherSecretNumber;
   }
    
};
