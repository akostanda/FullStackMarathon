/*
  Task 05 (test.js)
  Task name: Hard worker
*/

const HardWorker = require('./hard-worker');

bruce = new HardWorker;

bruce.name = 'Bruce';
console.log(bruce.name);

bruce.age = 50;
bruce.salary = 1500;
console.log(bruce.toObject());

bruce.name = 'Linda';
bruce.age = 140;
console.log(bruce.toObject());
