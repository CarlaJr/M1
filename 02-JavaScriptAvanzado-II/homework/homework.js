'use strict'

function counter() {
//Si colocaba la variable count en el global context sí funciona, 
//pero solo podre usar UN COUNTER, ya que sigue pisando a la variable global
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return function(){
    count = count + 1;
    return count;
  }
}

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado 
  //de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había 
  // invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!
  var obj = {}
  return function(x){
    if(obj.hasOwnProperty(x)){
      return obj[x];
    }
    obj[x] = cb(x);
    return obj[x];
  }
  /* var obj = {};
  return function(x){
    if(obj.hasOwnProperty(x)) obj[x];
    else obj[x] = cb(x);
    return obj[x];
  } */
}

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25
}

var alumno = {
  nombre: "Juan",
  curso: "FullStack"
}

function getNombre(){
  return this.nombre;
}
 // Escribir código, sin modificar lo que ya se encuentra escrito arriba, para poder llamar al método getNombre para obtener primero el nombre del instructor y luego para obtener el nombre del alumno.
// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que bindear el this!
let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);


/*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena"
y el delimitador especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces luego:

1. textoAsteriscos
2. textoGuiones
3. textoUnderscore

Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole un argumento en vez de los tres que recibe "crearCadena"
*/
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que usar bind para "bindear" algunos parámetros de la función crearCadena.

let textoAsteriscos = crearCadena.bind(this,'*','*'); // Este this, hace referencia al obj global

let textoGuiones = crearCadena.bind(undefined,'-','-'); //Siempre tenemos que pasar el primer argumento al bindear

let textoUnderscore = crearCadena.bind(null,'_','_'); //Y puede ser undefined o null

//Siempre tenemos que pasar el primer argumento al bindear, porque este es una referencia para crear el vinculo 
//(bind = unión) de donde sacaremos una copia de nuestra referencia. 
//Cuando no tenemos una referencia podemos usar null, undefined o el mismo this.

//Function currying
//Despues de que bind acepta su primer parametro, los siguientes que recibe sirven para bindear o unir los 
//parametros de la función y estos se vuelven los valores fijos (para modificalos es directamente sobre bind)

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
