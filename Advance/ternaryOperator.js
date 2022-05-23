/*
TERNARY OPERATOR

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.
*/

// Example

function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"

// SYNTAX
// condition ? exprIfTrue : exprIfFalse;

/*

PARAMETERS

condition - 
An expression whose value is used as a condition.

exprIfTrue - 
An expression which is executed if the condition evaluates to a truthy value (one which equals or can be converted to true).

exprIfFalse - 
An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).

*/
