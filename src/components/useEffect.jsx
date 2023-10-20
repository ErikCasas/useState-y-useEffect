import { useEffect, useState } from 'react';

export default function Pokemon(){

  //de este modo le doy color a los console.log
  const redStyle = 'color:red';
  const yellowStyle = 'color:yellow';
  const purpleStyle = 'color:purple';
  const greenStyle = 'color:green';
  const violetStyle = 'color:violet';

  /** 
   useEffect nos permite realizar efectos secundarios y se puede
   relacionar con el ciclo de vida del componente (nace, se actualiza, se desmonta)
   al activarse el useEffect, este genera un re-renderizado 
   (se recarga como comentaron en clase) del componente, para que 
   el ejemplo sea mas claro, vamos a abrir las herramientas de desarrollo y en la consola
   veremos el orden en el que se ejecutan los console.log();
 
   callback───┐     ╔═ array de dependencias
              |     ║ 
   useEffect(()=>{},[])
   
   recordemos que en caso de que al array de dependencias no se le pase ningun valor
   solo se ejecutara cuando se monte el componente por primera vez

   useEffect(()=>{},[])
   
   si se le pasa un valor al array, este se ejecutará cada que ese valor tenga 
   algun cambio 

   useEffect(()=>{},[valor])

   en caso de que no le pasemos ningun array al useEffect, este estará al 
   pendiente de cualquier cambio, lo cual puede llegar a ser contraproducente
   ya que se harian y se repetierian acciones innecesarias  

   useEffect(()=>{})

   NOTA: todos los useEffect se ejecutaran al montar el componete, independiente 
   de si tiene o no dependencias y al DESMONTAR el componente si este tiene el return
   que es con el que menejamos esa parte del ciclo de vida del componente
   */

  //-----------------------------------------------------------------------------------
   
  //useEffect que solo se ejecuta una vez

  useEffect(() => {
    console.log(`%cnacio el componete`, greenStyle );
  }, []);
  
  //-----------------------------------------------------------------------------------

  //useEffect que se ejecuta cada que hay un cambio en la dependencia
  //y cuando se desmonta 

  const [dependencia, setDependencia] = useState(true);

  useEffect(() => {
    console.log('%chubo un cambio en la dependencia, es decir que se actualizó el componente', yellowStyle);
    return () => {
      console.log(`%cse desmontó el componente X(`, redStyle);
    };
  }, [dependencia]);

  //-----------------------------------------------------------------------------------
  //useEffect que se ejecuta ante CUALQUIER cambio en el componente

  useEffect(() => {
    console.log(`%ceste useEffect se ejecuta ante cualquier cambio`,violetStyle);
  });

  
  console.log('%cSE ESTA MONTANDO EL COMPONENTE', purpleStyle);
  
  return (
    <>
    <h1>useEffect</h1>
    <p>para ver como funciona, click derecho, inspeccionar y vamos a la consola</p>
    <p>y ya solo queda analizar los distintos comportamientos que vimos para el useeffect</p>
      <button onClick={() => setDependencia(!dependencia)}>
        Cambio en la dependencia
      </button>
    </>
  );
};

