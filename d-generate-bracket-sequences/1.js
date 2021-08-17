const assert = require('assert').strict;
const generateBrackets = require('./index');

const x = generateBrackets(2);
console.log(x);
assert.deepEqual(['(())', '()()'], x);
// assert.deepEqual(['((()))', '(()())', '(())()', '()(())', '()()()'], generateBrackets(3));

console.info('OK!');
