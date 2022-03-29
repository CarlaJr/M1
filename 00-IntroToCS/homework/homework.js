'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var sum = 0;
  for(var i = 0;i<num.length;i++){
    sum += Math.pow(2,num.length - (i+1))*num[i]; 
    //num[i] es un string y el math.pow es un numero
  }
  return sum;

  /* var array = num.split("").reverse();
  var suma = 0;
  for(var i = 0; i < array.length;i++){
    var x = array[i];
    suma = suma + x*Math.pow(2,i);
  }
  return suma; */
  
/* var suma = 0;
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
return suma; */
}

function DecimalABinario(num) {
  // tu codigo aca :
  var bin = "";
  while(num > 0){
    bin = num%2 + bin; 
    // el numero(num%2) se pasa a string y concatena con el string bin
    num = Math.floor(num/2);
  }
  return bin;

  /* var i = 0;
  var array = [];
  while(num >= 1){
    i++;
    var x = num%2;
    array.push(Math.floor(x));
    num = num/2;
  }
  return array.reverse().join(""); */

  /* var i = 0;
  var array = [];
  while(num >= 1){
    i++;
    var x = num%2;
    array.unshift(Math.floor(x));
    num = num/2;
  }
  return array.join(""); */

  /* var i = 0;
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
  return invertir; */
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}