import React, { Fragment, useState } from 'react';
import { AddCategorie } from './components/AddCategorie';

const GiftExpert2 = () => {
   const [categories, setCategories] = useState(['Pokemon', 'Digimon', 'Naruto'])
   return (
      <>
         <ol>
            {categories.map((categoria) => {
               return <li key={categoria}>{categoria}</li>
            })}
         </ol>
         <AddCategorie setCategories={setCategories} />
      </>);
}

export default GiftExpert2;
