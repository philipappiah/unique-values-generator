unique-values-generator is a node package for generating unique numbers which still persists even if the server has lost connection or the server is off.

 <b>It truly generates unique numbers with an option to prefix the generated numbers with your own text</b><br/>



### `Guide to using the package in your project` 
### `In your project directory, run npm install unique-values-generator OR yarn add unique-values-generator`

You can then require it in your file and use it<br/>
<b>const uniquevalues &nbsp; = &nbsp; require('unique-values-generator');</b><br/>
<b>const value  &nbsp;=&nbsp;   uniquevalues.generate(1000,{increment:1,prefix:'Patient'});</b><br/>

<b>console.log(value);</b>&nbsp; # Patient1000, Patient1001, Patient1002, ... 

### `Three way usage. You can choose any which suits your needs.` 
<b>Usage 1</b><br/>
const uniquevalues &nbsp; = &nbsp; <b>require('unique-values-generator');</b><br/>
 uniquevalues.generate(startValue);   <br/>
 #Example; &nbsp;  <b>let num &nbsp; = &nbsp; uniquevalues.generate(100)</b> &nbsp; // &nbsp; returns series of unique number on every call <br/>
 



<b>Usage 2</b><br/>
const uniquevalues &nbsp; = &nbsp; <b>require('unique-values-generator');</b><br/>
 uniquevalues.generate(startValue, increment);   <br/>
 
#Example; &nbsp;  let num &nbsp; = &nbsp; uniquevalues.generate(100, 1) &nbsp; // &nbsp; returns series of unique number on every call.. 100, 101, 102... <br/>

<b>Usage 3</b><br/>
const uniquevalues &nbsp; = &nbsp;  <b>require('unique-values-generator');</b><br/>
uniquevalues.generate(startValue, {increment, prefix});<br/>
 #Example &nbsp; <b>let num &nbsp;= &nbsp;uniquevalues.generate({increment: 1000, prefix: 'Patient'})</b>  &nbsp;// &nbsp; Patient1000, Patient1001, Patient1002, ... <br/>
