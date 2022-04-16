import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
const GifGrid = ({ categoria }) => {

   // const [images, setImages] = useState([]);
   const { loading, data: images } = useFetchGifs(categoria)
   const [counter, setCounter] = useState(0)
   // const increment = () => {
   //    setCounter(counter + 1);
   // }
   const increment = () => {
      setCounter(c => c + 1);
   }
   return (
      <div>
         <button onClick={increment}>Incrementar</button>
         <h3>{categoria} {counter}</h3>
         {
            loading ? 'Loading' :
               images.map(img => (
                  <GifItem key={img.id} {...img} />
               ))
         }


      </div>
   );
}
export default GifGrid;