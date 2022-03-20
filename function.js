function sTo(){
    console.log(2+3)
    console.log(17-5)
    console.log(8/2)
    console.log(5*2)
}

sTo();

function add(num1, num2) {
    let sumResult = num1 + num2;
    return sumResult;
  }
  let result = add(230,405);
  console.log(" Addition = " + result);

  function divi(num1, num2) {
    let diviResult = num1 / num2;
    return diviResult;
  }
  let result4 = divi(30,200);
  console.log(" Division = " + result4);

  function multi(num1, num2) {
    let multiResult = num1 * num2;
    return multiResult;
  }
  let result3 = multi(20,100);
  console.log(" Multiplication = " + result3);

  function Sub(num1, num2) {
    let subResult = num1 - num2;
    return subResult;
  }
  let result2 = Sub(3000,2500);
  console.log("Subtraction = " + result2);

  // we have to create a function which takes A and B parameters and return value of (a+b)^2
// using the above mentioned function

function test(a, b) {
    let result = a * a + 2 * a * b + b * b;
    return result;
  }
  let result5 = test(20, 540);
  console.log(" the square of the sum of two numbers = " + result5);

  // we have to create a function of fibonacci series

  var a=0;
  var b=1;
  console.log(a);
  console.log(b);

  for(var i=0; i <=10; i++){
    var temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }