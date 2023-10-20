import { useState } from "react";

export default function UseState() {
  /**
    useState nos permite tener un estado en nuestro componente 
    funcional, esto nos permite almacenar y manipular algunos
    valores que son visibles o no para el usuario y que sean reactivos 
    y sean falciles de cambiar.

    valor actual del estado
       │
       └──┐           ╔═════════════ funcion con la que podemos actualizar el estado
          │           ║ 
  const [valor, actualizarValor] = useState( estado inicial );

    el estado inicial normalmente es un dato primitivo o vacio como: [], {}, 0, ''
    pero puede ser lo que querramos

    recordemos que estamos viendo la forma de desestructuar un array con el useState, 
    y al desestructurar un array no nos interesa el nombre de la propiedad que queremos 
    sino el index (posicion) de aquel valor dentro del array y lo podemos llamar como 
    querramos,por buenas practias se suelen llamar de forma descriptiva al 
    valor del estado y a la función que lo actualiza de misma forma pero 
    con "set" al incio
    
    const [value, setValue] = useState(0)
    */

  const [valor, actualizarValor] = useState(0);
  const [count, setCount] = useState(0);

  const handlerClick = () => {
    if (valor % 2 == 0 || valor == 0) {
      //si el valor es divisible por 2, sumará 1
      actualizarValor(valor + 1);
    } else {
      //de lo contrario sumará 11
      actualizarValor(valor + 11);
    }
  };
  return (
    <>
      <h1>useState</h1>
      <h1>contador 1 es {valor}</h1>
      <h1>contador 2 es {count}</h1>
      <h1>la suma total es: {count + valor}</h1>
      {/* usemos un handlerClick porque normalmente las acciones son mas complejas
      y lo asignamos a una funcion por buena practica y que el codigo sea legible */}

      <button onClick={() => actualizarValor(valor + 1)}>
        sumar contador 1
      </button>
      <button onClick={() => setCount(count + 1)}>sumar contador 2</button>
      <hr />
      <button onClick={() => actualizarValor(valor - 1)}>restar 1</button>
      <button onClick={() => actualizarValor(0)}>resetear valor a 0</button>
      <button onClick={handlerClick}>sumar de forma condicional</button>
    </>
  );
}
