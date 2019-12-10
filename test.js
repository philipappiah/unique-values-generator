const uniquevalues = require('./index');


const value = uniquevalues.generate(1000,{increment:1,prefix:'Patient'});
console.log(value);