document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit1").addEventListener("click", numberOne);
  document.getElementById("submit2").addEventListener("click", numberTwo);
  document.getElementById("submit3").addEventListener("click", numberThree);
  document.getElementById("submit4").addEventListener("click", numberFour);
  document.getElementById("submit5").addEventListener("click", numberFive);
  document.getElementById("submit6").addEventListener("click", numberSix);
  document.getElementById("submit7").addEventListener("click", numberSeven);
  document.getElementById("submit8").addEventListener("click", numberEight);
  document.getElementById("submit9").addEventListener("click", numberNine);
  document.getElementById("submit0").addEventListener("click", numberZero);
  document.getElementById("submitDot").addEventListener("click", numberDot);
  document.getElementById("plus").addEventListener("click", operationPlus);
  document.getElementById("minus").addEventListener("click", operationMinus);
  document.getElementById("times").addEventListener("click", operationTimes);
  document.getElementById("divide").addEventListener("click", operationDivide);
  document.getElementById("equals").addEventListener("click", equals);
  document.getElementById("neg").addEventListener("click", neg);
  document.getElementById("del").addEventListener("click", del);
  document.getElementById("clears").addEventListener("click", clears);
});

var num1 = "0";
var num2 = "0";
var op = "";
var number2 = 0;
var number1 = 0;

document.getElementById("equation").value = num2;

function neg() {
  if (num2.charAt(0) == "-") {
    num2 = num2.substr(1);
  } else {
    num2 = "-" + num2;
  }
  document.getElementById("equation").value = num2;
}

function del() {
  if (num2.length == 1) {
    num2 = "0";
    document.getElementById("equation").value = num2;
  } else {
    num2 = num2.substr(0, num2.length - 1);
    document.getElementById("equation").value = num2;
  }
}

function print() {
  console.log(num2 + " " + op + " " + num1);
  // refresh()
}

function equals() {
  number1 = parseFloat(num1);
  number2 = parseFloat(num2);
  if (op == "+") {
    var ans = number1 + number2;
    check("plus");
  }
  if (op == "-") {
    var ans = number1 - number2;
    check("minus");
  }
  if (op == "*") {
    var ans = number1 * number2;
    check("times");
  }
  if (op == "/") {
    var ans = number1 / num2;
    check("divide");
  }
  if (ans == undefined) {
    ans == "Error";
  }
  console.log(ans);
  num1 = num2;
  num2 = "0";
  // refresh()
  document.getElementById("equation").value = ans;
  clr();
}
function clears() {
  num2 = "0";
  num1 = "0";
  op = "";
  number2 = 0;
  number1 = 0;
  document.getElementById("equation").value = "0";
  console.log("cleared");
  clr();
}
function check(id) {
  document.getElementById("minus").style.backgroundColor = "rgb(255, 153, 0)";
  document.getElementById("minus").style.color = "white";
  document.getElementById("plus").style.backgroundColor = "rgb(255, 153, 0)";
  document.getElementById("plus").style.color = "white";
  document.getElementById("times").style.backgroundColor = "rgb(255, 153, 0)";
  document.getElementById("times").style.color = "white";
  document.getElementById("divide").style.backgroundColor = "rgb(255, 153, 0)";
  document.getElementById("divide").style.color = "white";
  setstyle(id);
}
function setstyle(id) {
  document.getElementById(id).style.backgroundColor = "white";
  document.getElementById(id).style.color = "rgb(255, 153, 0)";
}
function clr() {
  document.getElementById("minus").style.backgroundColor = "rgb(255, 153, 0)";
  document.getElementById("minus").style.color = "white";
  document.getElementById("plus").style.backgroundColor = "rgb(255, 153, 0)";
  document.getElementById("plus").style.color = "white";
  document.getElementById("times").style.backgroundColor = "rgb(255, 153, 0)";
  document.getElementById("times").style.color = "white";
  document.getElementById("divide").style.backgroundColor = "rgb(255, 153, 0)";
  document.getElementById("divide").style.color = "white";
}

function numberOne() {
  var nums = 1;
  if (num2 == "0") {
    num2 = nums.toString();
  } else {
    num = nums.toString();
    num2 = num2 + num;
    console.log(num2);
  }
  document.getElementById("equation").value = num2;
}

function numberTwo() {
  var nums = 2;
  if (num2 == "0") {
    num2 = nums.toString();
  } else {
    num = nums.toString();
    num2 = num2 + num;
    console.log(num2);
  }
  document.getElementById("equation").value = num2;
}

function numberThree() {
  var nums = 3;
  if (num2 == "0") {
    num2 = nums.toString();
  } else {
    num = nums.toString();
    num2 = num2 + num;
    console.log(num2);
  }
  document.getElementById("equation").value = num2;
}

function numberFour() {
  var nums = 4;
  if (num2 == "0") {
    num2 = nums.toString();
  } else {
    num = nums.toString();
    num2 = num2 + num;
    console.log(num2);
  }
  document.getElementById("equation").value = num2;
}

function numberFive() {
  var nums = 5;
  if (num2 == "0") {
    num2 = nums.toString();
  } else {
    num = nums.toString();
    num2 = num2 + num;
    console.log(num2);
  }
  document.getElementById("equation").value = num2;
}

function numberSix() {
  var nums = 6;
  if (num2 == "0") {
    num2 = nums.toString();
  } else {
    num = nums.toString();
    num2 = num2 + num;
    console.log(num2);
  }
  document.getElementById("equation").value = num2;
}

function numberSeven() {
  var nums = 7;
  if (num2 == "0") {
    num2 = nums.toString();
  } else {
    num = nums.toString();
    num2 = num2 + num;
    console.log(num2);
  }
  document.getElementById("equation").value = num2;
}

function numberEight() {
  var nums = 8;
  if (num2 == "0") {
    num2 = nums.toString();
  } else {
    num = nums.toString();
    num2 = num2 + num;
    console.log(num2);
  }
  document.getElementById("equation").value = num2;
}

function numberNine() {
  var nums = 9;
  if (num2 == "0") {
    num2 = nums.toString();
  } else {
    num = nums.toString();
    num2 = num2 + num;
    console.log(num2);
  }
  document.getElementById("equation").value = num2;
}

function numberZero() {
  var nums = 0;
  if (num2 == "0") {
    num2 = nums.toString();
  } else {
    num = nums.toString();
    num2 = num2 + num;
    console.log(num2);
  }
  document.getElementById("equation").value = num2;
}

function numberDot() {
  var nums = ".";
  if (num2 == "0") {
    num2 = nums.toString();
  } else {
    num = nums.toString();
    num2 = num2 + num;
    console.log(num2);
  }
  document.getElementById("equation").value = num2;
}

function operationPlus() {
  var operation = "+";
  op = operation;
  if (num2 != "") {
    num1 = num2;
    num2 = "";
    if (op == "+") {
      var ans = number1 + number2;
      check("plus");
    }
    if (op == "-") {
      var ans = number1 - number2;
      check("minus");
    }
    if (op == "*") {
      var ans = number1 * number2;
      check("times");
    }
    if (op == "/") {
      var ans = number1 / num2;
      check("divide");
    }
  } else {
    console.log("Error");
  }
  // refresh()
}

function operationMinus() {
  var operation = "-";
  op = operation;
  if (num2 != "") {
    num1 = num2;
    num2 = "";
    if (op == "+") {
      var ans = number1 + number2;
      check("plus");
    }
    if (op == "-") {
      var ans = number1 - number2;
      check("minus");
    }
    if (op == "*") {
      var ans = number1 * number2;
      check("times");
    }
    if (op == "/") {
      var ans = number1 / num2;
      check("divide");
    }
  } else {
    console.log("Error");
  }
  // refresh()
}

function operationTimes() {
  var operation = "*";
  op = operation;
  if (num2 != "") {
    num1 = num2;
    num2 = "";
    if (op == "+") {
      var ans = number1 + number2;
      check("plus");
    }
    if (op == "-") {
      var ans = number1 - number2;
      check("minus");
    }
    if (op == "*") {
      var ans = number1 * number2;
      check("times");
    }
    if (op == "/") {
      var ans = number1 / num2;
      check("divide");
    }
  } else {
    console.log("Error");
  }
  // refresh()
}
function operationDivide() {
  var operation = "/";
  op = operation;
  if (num2 != "") {
    num1 = num2;
    num2 = "";
    if (op == "+") {
      var ans = number1 + number2;
      check("plus");
    }
    if (op == "-") {
      var ans = number1 - number2;
      check("minus");
    }
    if (op == "*") {
      var ans = number1 * number2;
      check("times");
    }
    if (op == "/") {
      var ans = number1 / num2;
      check("divide");
    }
  } else {
    console.log("Error");
  }
  // refresh()
}
