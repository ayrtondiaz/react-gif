import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')
  const onInputChange=(event)=>{
    setInputValue(event.target.value);
  }
  const onSubmit=(event)=>{
    event.preventDefault();//para que no se recargue
    if(inputValue.trim()<=1)return;
    // setCategories(categories=>[inputValue, ...categories])
    onNewCategory(inputValue.trim());
    setInputValue('')
  }

  return (
    //cuando hay un callnack como anajo se puede resumir asi
    // <form onSubmit={(event)=> onSubmit(event)}>
    <form onSubmit={onSubmit}>
      <input type="text" 
      placeholder='Buscar gifs'
      value={inputValue}
      // onChange={ (event) =>onInputChange(event)}
      onChange={ onInputChange}
      />
    </form>
  )
}
