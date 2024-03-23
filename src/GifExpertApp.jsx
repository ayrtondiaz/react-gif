import React from 'react';
import {useState} from 'react';
import { AddCategory, GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku'])
    
    const onAddCategory=(newCategory)=>{
        // para no poner valores repetidos
        if(categories.includes(newCategory)) return; 
        // setCategories(categories.push('gohan'))
        // console.log(newCategory)
        // console.log(categories)
        // setCategories(['Hola Mundo']);
        setCategories([newCategory,...categories]);
        // setCategories(cat=>[...cat,'Valorant'])
    }

  return (
    <>
    {/* titulo */}
    <h1>GifExpertApp</h1>
    {/* input */}
    {/* <AddCategory setCategories={setCategories}></AddCategory> */}
    <AddCategory onNewCategory={onAddCategory}></AddCategory>
    {/* listado de gifs */}
  
    {/* <button onClick={onAddCategory}>Add</button> */}

    {categories.map((category)=>(
        <GifGrid key={category} category={category}></GifGrid>
    ))
    }
        {/* gif item */}
    </>
  )
}
