// GLobal Scope
let num = [];
let operand = '';
let result = 0;

function insert(number) {
    let clicks = 0;
    document.getElementById('number').setAttribute('value', number)
    num.push(number)
    clicks++;
}

function Add() {
    console.log(num)
    operand = '+'
}

function Subtract() {
    console.log(num)
    operand = '-'
}

function Multiply() {
    console.log(num)
    operand = '*'
}

function Divide() {
    console.log(num)
    operand = '/'
}

function Compute() {
    console.log(num)
    if (operand == '+') {
        // Add all the numbers
          // Print all the numbers
          result = 0;
          for(let i = 0; i < num.length; i++) {
              result = result + num[i]
          }
          console.log(result)
          document.getElementById('number').setAttribute('value', result)
          return result;
    } 
    if (operand == '-') {
        result = num[0];
        console.log(num)
          for(let i = 1; i < num.length; i++) {
              console.log(num[i])
              result -= num[i]
          }
          console.log(num)
          console.log(result)
          console.log(result)
          document.getElementById('number').setAttribute('value', result)
          return result;
    }
}