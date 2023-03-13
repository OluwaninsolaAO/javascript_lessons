#!/usr/bin/env node

let Buz = function () {};

Buz.prototype.log = function () {
  console.log('Hello World');
};

module.exports = new Buz();
