
// (function(exports,require,module, __filename,__direname){
//     console.log("Hello from IIFF");
// })();

// console.log(__filename);
// console.log(__dirname);

const greet=require('./greet');
const {person1,person2,person3}=require('./peoples');
console.log(person1);
console.log(person2);
greet(person2);
greet("Yeamin Sikder");

