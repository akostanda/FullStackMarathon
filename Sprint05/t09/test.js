/*
  Task 09 (test.js)
  Task name: Mixins
*/

const MarkII = require('./markii');
const Printable = require('./printable');

class WarMachine extends MarkII {}
Object.assign(WarMachine.prototype, Printable);

const wm = new WarMachine;
wm.print();
