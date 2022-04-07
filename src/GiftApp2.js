import React, { Fragment, useState } from 'react';
import { AddCategorie } from './components/AddCategorie';
import GifGrid from './components/GifGrid';

const GiftExpert2 = () => {
   const [categories, setCategories] = useState(['Ranma'])
   return (
      <>
         <AddCategorie setCategories={setCategories} />
         <ol>
            {categories.map((categoria) => <GifGrid key={categoria} categoria={categoria} />)}
         </ol>

      </>);
}

export default GiftExpert2;
