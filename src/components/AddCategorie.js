import React, { useState } from 'react';
import { PropTypes } from 'prop-types'
export const AddCategorie = ({ setCategories }) => {
   const [inputValue, setInputValue] = useState('Defecto');

   const handdleAdd = ({ target }) => {
      const { value } = target
      setInputValue(value);
   }

   const addCategorie = (event) => {
      event.preventDefault();
      const { value } = event.target;
      console.log(inputValue);
      setCategories(element => [...element, inputValue])
   }
   return (<form onSubmit={addCategorie}>
      <input value={inputValue} onChange={handdleAdd} ></input>
   </form>)
}

AddCategorie.propTypes = {
   setCategories: PropTypes.func.isRequired
}