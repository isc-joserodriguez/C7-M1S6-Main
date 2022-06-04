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

/* var num1 = 5;
var num2 = num1;
console.log(num2);
num2++;
console.log(num2);
console.log(num1);



var arreglo1 = [1, 2, 3];
var arreglo2 = [...arreglo1];
console.log(arreglo2);
arreglo2.push(4);
console.log(arreglo2);
console.log(arreglo1); */

console.log('ForEach')
console.log(arreglo)

for (var i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

for (var elemento of arreglo) {
    console.log(elemento);
}

arreglo.forEach(function (elemento, indice) {
    console.log(elemento, indice);
});


arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arreglo);

arreglo.sort(function (nombre1, nombre2) {
    if (nombre1 > nombre2) {
        return 0;
    } else {
        return -1;
    }
});

console.log(arreglo);

const arregloFiltrado = arreglo.filter(function (elemento, indice) {
    /* if (elemento % 2 == 0) {
        return false;
    } else {
        return true;
    } */

    return !(elemento % 2 == 0)
})

console.log(arregloFiltrado);

const arregloMap = arreglo.map(function (elemento, indice) {
    return elemento * 21;
});

console.log(arregloMap);


arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reduce = arreglo.reduce(
    function (acumulador, elemento, indice) {
        if (elemento % 2 == 0) { // Significa que el elemento es par
            return elemento + acumulador;
        } else {
            return acumulador;
        }
    },
    0
)

console.log(reduce);

console.log(arreglo);

/**
 * Modificar la función del promedio de calificaciones y que además del promedio, retorne un mensaje según aplique:

    0-30: Muy deficiente
    31-50: Insuficiente
    51-60: Suficiente
    61-70: Bien
    71-90: Notable
    91-100: Sobresaliente

    promedio(70, 80, 80, 90, 60) // 76: Notable.
    promedio(70, 50, 75, 70, 60) // 65: Bien.
 */

function promedio(arregloCalificaciones) {
    var suma = arregloCalificaciones
        .reduce(function (acumulador, elemento) {
            return acumulador + elemento;
        },
            0
        );

    var promedio = suma / arregloCalificaciones.length

    if (promedio < 31) {
        return 'Promedio: ' + promedio + '. Muy deficiente...';
    } else if (promedio < 51) {
        return 'Promedio: ' + promedio + '. Insuficiente...';
    } else if (promedio < 61) {
        return 'Promedio: ' + promedio + '. Suficiente...';
    } else if (promedio < 71) {
        return 'Promedio: ' + promedio + '. Bien...';
    } else if (promedio < 91) {
        return 'Promedio: ' + promedio + '. Notable...';
    } else {
        return 'Promedio: ' + promedio + '. Sobresaliente...';
    }
}

function promedioForEach(arregloCalificaciones) {
    var suma = 0;

    arregloCalificaciones.forEach(function (calificacion) {
        // suma = suma + calificacion;
        suma += calificacion;
    })

    var promedio = suma / arregloCalificaciones.length

    if (promedio < 31) {
        return 'Promedio: ' + promedio + '. Muy deficiente...';
    } else if (promedio < 51) {
        return 'Promedio: ' + promedio + '. Insuficiente...';
    } else if (promedio < 61) {
        return 'Promedio: ' + promedio + '. Suficiente...';
    } else if (promedio < 71) {
        return 'Promedio: ' + promedio + '. Bien...';
    } else if (promedio < 91) {
        return 'Promedio: ' + promedio + '. Notable...';
    } else {
        return 'Promedio: ' + promedio + '. Sobresaliente...';
    }
}

const calificaciones = [];

console.log(promedio(calificaciones));
console.log(promedioForEach(calificaciones));


const newArreglo = arreglo.map(function (elemento) {
    return elemento / 2;
});

for (var i = 0; i < arreglo.length; i++) {
    elemento[i] = elemento[i] / 2;
};




contarLetras(['jose', 'pablo', 'Mario']) //[4, 5, 5]