var btnBox = document.getElementById("btn-box");
var numBtns = 10;
var calculator = calculatorModule();
var nDisplay = 0;
var operator;
var displayBox = document.getElementById('display-box');
//var totalBalance =

for(var i = 0; i < numBtns; i++){
  var btn = document.createElement("button");
  console.log(btn);

  btn.innerHTML = `Button ${i}`;
  btn.id = 'btn' + i;
  btn.dataset.value = i;
  btn.addEventListener("click", function(event){
    var updateDisplay = displayBox.innerHTML + event.target.dataset.value;
    displayBox.innerHTML = updateDisplay;
    nDisplay = updateDisplay;
    console.log(nDisplay);
    // if (operator !== undefined) {
    //   displayBox.innerHTML = '';
    //   console.log("if is being executed");
    //   var displayBox = document.getElementById('display-box');
    // var updateDisplay = displayBox.innerHTML + event.target.dataset.value;
    // displayBox.innerHTML = updateDisplay;
    // nDisplay = updateDisplay;
    // }




  });

  btnBox.appendChild(btn);
}
//create decimal button
var dec = document.createElement('button');

dec.innerHTML = '.';
dec.id = 'deci';
dec.addEventListener('click', function(event) {
  var displayBox = document.getElementById('display-box');
  var updateDisplay = displayBox.innerHTML + '.';
  displayBox.innerHTML = updateDisplay;
});
btnBox.appendChild(dec);

//create '00' button
var d00 = document.createElement('button');
d00.innerHTML = '00';
d00.id = 'd0';
d00.addEventListener('click', function(event) {
  var updateDisplay = displayBox.innerHTML + '00';
  displayBox.innerHTML = updateDisplay;
});
btnBox.appendChild(d00);

//create signs buttons
var getSign = document.getElementById('sign-box');
// divide
var divi = document.createElement('button');
divi.innerHTML = '÷';
divi.id = 'div';
divi.addEventListener('click', function(event) {
  calculator.load(Number(displayBox.innerHTML));
  operator = div;
  displayBox.innerHTML = '';
  console.log(operator);
});
getSign.appendChild(divi);

//multiply
var mult = document.createElement('button');
mult.innerHTML = 'x';
mult.id = 'mult';
mult.addEventListener('click', function(event) {
  calculator.load(Number(displayBox.innerHTML));
  operator = mult;
  displayBox.innerHTML = '';
  console.log(operator);
});
getSign.appendChild(mult);

//subtract
var min = document.createElement('button');
min.innerHTML = '-';
min.id = 'minus';
min.addEventListener('click', function(event) {
  calculator.load(Number(displayBox.innerHTML));
  operator = minus;
  displayBox.innerHTML = '';
  console.log(operator);
});
getSign.appendChild(min);

//add
var ad = document.createElement('button');
ad.innerHTML = '+';
ad.id = 'add';
ad.addEventListener('click', function(event) {
  calculator.load(Number(displayBox.innerHTML));
  operator = add;
  displayBox.innerHTML = '';
  console.log(operator);
});
getSign.appendChild(ad);

//equal sign
var eq = document.createElement('button');
eq.innerHTML = '=';
eq.id = 'total';
eq.addEventListener('click', function(event) {
  if (operator === div) {
    calculator.divide(Number(displayBox.innerHTML));
    displayBox.innerHTML = calculator.getTotal();
  } else if (operator === mult) {
    calculator.multiply(Number(displayBox.innerHTML));
    displayBox.innerHTML = calculator.getTotal();
  } else if (operator === minus) {
    calculator.subtract(Number(displayBox.innerHTML));
    displayBox.innerHTML = calculator.getTotal();
  }else if (operator === add) {
    calculator.add(Number(displayBox.innerHTML));
    displayBox.innerHTML = calculator.getTotal();
  }

});


getSign.appendChild(eq);




//create 'clear' button
var pinClr = document.getElementById('clearBtn-box');

var clrBtn = document.createElement('button');
clrBtn.innerHTML = 'clear';
clrBtn.id = 'clr';
clrBtn.addEventListener('click', function(event) {
  displayBox.innerHTML = '';
  calculator.clearMemory();

});
pinClr.appendChild(clrBtn);

//create getBalance button
var goToGet = document.getElementById('getBalanceBtn-box');

var crteGet = document.createElement('button');
crteGet.innerHTML = 'get balance';
crteGet.Id = 'gBal';
goToGet.appendChild(crteGet);

//create deposit cash button
var goDep = document.getElementById('depositCashBtn-box');

var crteDep = document.createElement('button');
crteDep.innerHTML = 'deposit cash';
crteDep.Id = 'Dp';
crteDep.addEventListener('click', function(event) {
  var balance = calculator.load(Number(displayBox.innerHTML));
});
goDep.appendChild(crteDep);

//create withdraw cash button
var goWit = document.getElementById('withdrawCashBtn-box');

var crteWit = document.createElement('button');
crteWit.innerHTML = 'withdraw cash';
crteWit.Id = 'cWit';
goWit.appendChild(crteWit);





