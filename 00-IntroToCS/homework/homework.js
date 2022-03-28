'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
var suma = 0;
var e = 0;
for(var i = num.length-1;i >=0 ;i--){
  var x = true;
  while (x === true){
    var x = parseInt(num[i]);
    var pow = Math.pow(2,e);
    suma = suma + x*pow;
    e++;
    x = false;
  }
}
return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
var i = 0;
var array = [];
while(num >= 1){
  i++;
  var x = num%2;
  array.push(Math.floor(x));
  num = num/2;
}
var base = array.join("");
var invertir = "";
for (var i = base.length - 1; i >= 0 ;i--){
  invertir = invertir + base.charAt(i);
}
return invertir;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}