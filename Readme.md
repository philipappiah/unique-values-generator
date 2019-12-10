unique-values-generator is a node package for generating unique numbers which still persists even if the server has lost connection or the server is off.

 <b>It truly generates unique numbers with an option to prefix the generated numbers with your own text</b><br/>



### `Guide to using the package in your project` 
### `In your project directory, run npm install unique-values-generator OR yarn add unique-values-generator`

You can then require it in your file and use it<br/>
<b>const uniquevalues &nbsp; = &nbsp; require('unique-values-generator');</b><br/>
<b>const value  &nbsp;=&nbsp;   uniquevalues.generate(1000,{increment:1,prefix:'Patient'});</b><br/>

console.log(value); <!--- Patient1000, Patient1001, Patient1002, ... -->

### `Three way usage. You can choose any which suits your needs.` 
<b>Usage 1</b><br/>
const uniquevalues &nbsp; = &nbsp; require('unique-values-generator');<br/>
 uniquevalues.generate(startValue); <!--- let num = uniquevalues.generate(100) // // returns series of unique number on every call --> <br/>
 



<b>Usage 2</b><br/>
const uniquevalues &nbsp; = &nbsp; require('unique-values-generator');<br/>
uniquevalues.generate(startValue, increment);  <!--- let num = uniquevalues.generate(100) // returns series of unique number on every call--><br/>


<b>Usage 3</b><br/>
const uniquevalues &nbsp; = &nbsp; require('unique-values-generator');<br/>
uniquevalues.generate(startValue, {increment, prefix}); <!--- let num = uniquevalues.generate({increment: 1000, prefix: 'Patient'}) // Patient1000, Patient1001, Patient1002, ...--> <br/>
