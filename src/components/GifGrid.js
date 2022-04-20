import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
const GifGrid = ({ categoria }) => {

   const { loading, data: images } = useFetchGifs(categoria)

   return (
      <div>
         <h3>{categoria}</h3>
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