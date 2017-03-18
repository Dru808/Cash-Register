var btnBox = document.getElementById("btn-box");
var numBtns = 10;

for(var i = 0; i < numBtns; i++){
  var btn = document.createElement("button");
  console.log(btn);

  btn.innerHTML = `Button ${i}`;
  btn.id = 'btn' + i;
  btn.dataset.value = i;
  btn.addEventListener("click", function(event){
   var print = document.getElementById('display-box');
   print.innerHTML = event.target.dataset.value;

   console.log(event.target.dataset.value);
  });

  btnBox.appendChild(btn);
}

//create decimal button
var dec = document.createElement('dot');

dec.innerHTML = '.';
dec.id = 'deci';
btnBox.appendChild(dec);

//create '00' button
var d00 = document.createElement('d0');
dec.innerHTML = '00';
d00.id = 'd0';
btnBox.appendChild(d00);

//create signs buttons
var getSign = document.getElementById('sign-box');
// divide
var divi = document.createElement('divide');
divi.innerHTML = '÷';
divi.id = 'div';
getSign.appendChild(divi);

//multiply
var mult = document.createElement('time');
mult.innerHTML = 'x';
mult.id = 'mult';
getSign.appendChild(mult);

//subtract
var min = document.createElement('minus');
min.innerHTML = '-';
min.id = 'minus';
getSign.appendChild(min);

//add
var ad = document.createElement('addition');
ad.innerHTML = '+';
ad.id = 'add';
getSign.appendChild(ad);

//equal sign
var eq = document.createElement('equal');
eq.innerHTML = '=';
eq.id = 'total';
getSign.appendChild(eq);




//create 'clear' button
var pinClr = document.getElementById('clearBtn-box');

var clrBtn = document.createElement('clear');
clrBtn.innerHTML = 'clear';
clrBtn.id = 'clr';
pinClr.appendChild(clrBtn);

//create getBalance button
var goToGet = document.getElementById('getBalanceBtn-box');

var crteGet = document.createElement('balance');
crteGet.innerHTML = 'get balance';
crteGet.Id = 'gBal';
goToGet.appendChild(crteGet);

//create deposit cash button
var goDep = document.getElementById('depositCashBtn-box');

var crteDep = document.createElement('deposit');




