import React, { useEffect, useState } from "react";
import List from "./List";

const Pokemon = () => {
  /**
   Ejemplo practico que relaizamos en clase en el que al montar el componente 
   se hace un llamado a una api para de este modo mostrar la informacion que seria 
   brindada por un backEnd, le agregué un ejemplo del uso del operador && para reforzar los 
   conocimiente sobre el renderizado de este tipo
  */

  const [booleano, setBooleano] = useState(false);
  const [listaPokemons, setListaPokemons] = useState([]);

  useEffect(() => {
    //le digo que haga una consulta a una URL
    fetch("https://pokeapi.co/api/v2/pokemon")
      //la respuesta viene en formato jason, asi que la paso a algo entendible para js
      .then((respuesta) => respuesta.json())
      //una vez tengo los datos, los guardo en un estado local
      .then((datos) => setListaPokemons(datos.results));
  }, []);

  return (
    <>
      <h1>Pokemones...</h1>
      <button onClick={() => setBooleano(!booleano)}>
        {booleano ? "ocultar lista de pokemons" : "mostrar lista de pokemons"}
      </button>
      <ul>
        {booleano &&
          listaPokemons.map((pokemon, index) => (
            <List key={index} name={pokemon.name} />
          ))}
      </ul>
    </>
  );
};

export default Pokemon;
