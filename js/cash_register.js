var btnBox = document.getElementById("btn-box");
var numBtns = 10;
var calculator = calculatorModule();

for(var i = 0; i < numBtns; i++){
  var btn = document.createElement("button");
  console.log(btn);

  btn.innerHTML = `Button ${i}`;
  btn.id = 'btn' + i;
  btn.dataset.value = i;
  btn.addEventListener("click", function(event){
   var displayBox = document.getElementById('display-box');
    var updateDisplay = displayBox.innerHTML + event.target.dataset.value;
     displayBox.innerHTML = updateDisplay;




  });

  btnBox.appendChild(btn);
}

//create decimal button
var dec = document.createElement('button');

dec.innerHTML = '.';
dec.id = 'deci';
dec.addEventListener('click', function(event) {
  var displayBox = document.getElementById('display-box');
  displayBox.innerHTML = '.';
});
btnBox.appendChild(dec);

//create '00' button
var d00 = document.createElement('button');
d00.innerHTML = '00';
d00.id = 'd0';
btnBox.appendChild(d00);

//create signs buttons
var getSign = document.getElementById('sign-box');
// divide
var divi = document.createElement('button');
divi.innerHTML = '÷';
divi.id = 'div';
getSign.appendChild(divi);

//multiply
var mult = document.createElement('button');
mult.innerHTML = 'x';
mult.id = 'mult';
getSign.appendChild(mult);

//subtract
var min = document.createElement('button');
min.innerHTML = '-';
min.id = 'minus';
getSign.appendChild(min);

//add
var ad = document.createElement('button');
ad.innerHTML = '+';
ad.id = 'add';
getSign.appendChild(ad);

//equal sign
var eq = document.createElement('button');
eq.innerHTML = '=';
eq.id = 'total';
getSign.appendChild(eq);




//create 'clear' button
var pinClr = document.getElementById('clearBtn-box');

var clrBtn = document.createElement('button');
clrBtn.innerHTML = 'clear';
clrBtn.id = 'clr';
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
goDep.appendChild(crteDep);

//create withdraw cash button
var goWit = document.getElementById('withdrawCashBtn-box');

var crteWit = document.createElement('button');
crteWit.innerHTML = 'withdraw cash';
crteWit.Id = 'cWit';
goWit.appendChild(crteWit);





