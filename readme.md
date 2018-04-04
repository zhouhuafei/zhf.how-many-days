# 某年某月有多少天
```
const howManyDays = require('zhf.how-many-days');

console.log(howManyDays(2000)); // 366
console.log(howManyDays(2012)); // 366
console.log(howManyDays(2013)); // 365
console.log(howManyDays(2014)); // 365
console.log(howManyDays(2015)); // 365
console.log(howManyDays(2016)); // 366
console.log(howManyDays(2017)); // 365
console.log(howManyDays(2018)); // 365
console.log(howManyDays(2000, 2)); // 29
console.log(howManyDays(2012, 2)); // 29
console.log(howManyDays(2013, 2)); // 28
console.log(howManyDays(2014, 2)); // 28
console.log(howManyDays(2015, 2)); // 28
console.log(howManyDays(2016, 2)); // 29
console.log(howManyDays(2017, 2)); // 28
console.log(howManyDays(2018, 1)); // 31
console.log(howManyDays(2018, 2)); // 28
console.log(howManyDays(2018, 3)); // 31
console.log(howManyDays(2018, 4)); // 30
console.log(howManyDays(2018, 5)); // 31
console.log(howManyDays(2018, 6)); // 30
console.log(howManyDays(2018, 7)); // 31
console.log(howManyDays(2018, 8)); // 31
console.log(howManyDays(2018, 9)); // 30
console.log(howManyDays(2018, 10)); // 31
console.log(howManyDays(2018, 11)); // 30
console.log(howManyDays(2018, 12)); // 31
```
