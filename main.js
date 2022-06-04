/* var arreglo = [
    [1, 2, 3],
    [1, 2, 3], 
    [1, 2, 3]
] */


/* var arreglo = [1, 2, 3, 'cadena', true, [], [1, 2, 3], [true, false], [12, 'hola', ['Hey', true]]]

console.log(arreglo)

console.log(arreglo[3]);
console.log(arreglo[4]);
console.log(arreglo[8][1]);
console.log(arreglo[8][2]);
console.log(arreglo[8][2][0]); */

var arreglo = [1, 2, 3, 4, 5, 6]
console.log(arreglo);

arreglo.push('elemento') // Agregar un nuevo elemento al final
arreglo.push('otro') // Agregar un nuevo elemento al final
arreglo.push('hola') // Agregar un nuevo elemento al final
console.log(arreglo);
arreglo.pop() // Elimina al último elemento
console.log(arreglo);

arreglo.unshift('elemento') // Agregar un nuevo elemento al inicio
arreglo.unshift('otro') // Agregar un nuevo elemento al inicio
arreglo.unshift('hola') // Agregar un nuevo elemento al inicio
console.log(arreglo);
arreglo.shift() // Elimina el primer elemento
console.log(arreglo);

function eliminarElementos(indice, numeroElementos) {
    console.log('Se modifica el arreglo')
    return arreglo.splice(indice, numeroElementos) // Recibe un indice y el número de elementos a eliminar
}

var eliminados = eliminarElementos(5, 3);
console.log(arreglo);
console.log(eliminados);

console.log(arreglo.length)
arreglo[arreglo.length] = 'Nuevo Elemento';
arreglo[arreglo.length] = 'Otro Elemento';
console.log(arreglo)

for (var i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

for (var elemento of arreglo) {
    console.log(elemento);
}