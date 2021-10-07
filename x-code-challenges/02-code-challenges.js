/* **Parte 1**
Escribir una rutina que simule el lanzamiento de un
dado de 6 caras. Ejemplo: *

Die.play()
1

Die.play()
6

*/


// Solucion

/* function rollDice() {
    let min = 1, max = 6
    // return dieGame = Math.floor(Math.random() * 10)
    return Math.floor(Math.random() * (max - min + 1) + min)

  }
  

console.log(rollDice()); */

// ####################


/* **Parte 2**
Escribir una rutina que retorne una mano representada
como un arreglo con el resultado de N lanzamientos de
un dado utilizando la rutina de la **Parte 1**. Ejemplos: 

Hand.play(3)
[1,5,6]

Hand.play(10)
[1,3,1,6,5,4,5,4,6,2]

*/

// Solucion

/* function rollDice(rollDice) {

    for (i = 0 ; i <= rollDice.length ; i++) {
    let min = 1, max = 6
    let array = [];    
    console.log(typeof array);
    let rollDiceMath = Math.floor(Math.random() * (max - min + 1) + min)
    array.push(+rollDiceMath);
    
    console.log(typeof array);
    return array;
    
    
    }
  }  

console.log(rollDice(6)); */

// ####################


/* **Parte 3**
Escribir una rutina que quite los primeros M lanzamientos de una mano dada y retorne la nueva mano. Ejemplos quitando 2 lanzamientos:

```elixir
Hand.discard([1,5,3,6,1,2,1,2,5,4,1,4,6,2,3,1], 2)
[3,6,1,2,1,2,5,4,1,4,6,2,3,1]

Hand.discard([5,3], 2)
[]
``` */


/* **Parte 4**
Escribir una rutina que genere una mano de N lanzamientos y luego descarte M lanzamientos. ***Si la rutina se ejecuta varias veces, se debe usar la mano resultante de la ultima invocación y adicionarle los nuevos lanzamientos generados (ver ejemplos).*** La rutina debe imprimir el estado inicial de la mano, los lanzamientos nuevos generados, los lanzamientos descartados, y retornar el estado final de la mano. Ejemplo:

```elixir
Hand.run({n: 6, m: 2})
Estado de la mano : []
Lanzamientos generados (6): [4,1,5,2,3,6]
Lanzamientos descartados (2): [4,1]
[5,2,3,6]

Hand.run({n: 3, m: 2})
Estado de la mano : [5,2,3,6]
Lanzamientos generados (3): [4,4,2]
Lanzamientos descartados (2): [5,2]
[3,6,4,4,2]

Hand.run({n: 1, m: 2})
Estado de la mano : [3,6,4,4,2]
Lanzamientos generados (1): [5]
Lanzamientos descartados (2): [3,6]
[4,4,2,5] */