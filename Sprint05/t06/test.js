/*
  Task 06 (test.js)
  Task name: Tower
*/

const Tower = require('./tower');

const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
starkTower.hasElevator = true;
starkTower.arcCapacity = 70;
starkTower.height = 1130;
console.log(starkTower.toString());
