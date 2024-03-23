import React from 'react'
import { useEffect, useState } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';



export const GifGrid = ({category}) => {
  
//   const http=['']

    const {images, isLoading} = useFetchGifs(category);


// LO DE ABAJO SE REMPLAZA POR CUSTOM HOOKS

    // const [images, setImages] = useState([])
    // const getImages=async()=>{
    //     const newImages= await getGifs(category) ;
    //     setImages(newImages)
    //     console.log(newImages)
    // }

    // useEffect(()=>{
    //     getImages();
        
    // },[])//el use effect es para que no se repita y el [] es para q se ejecute una vez
  
  
    return (
    <>
        <h3>{category}</h3>
        {/* <LoadingMessage isLoading={isLoading}></LoadingMessage> */}
        {
            // isLoading ? (<h2>Cargando...</h2>):null 
            isLoading && (<h2>Cargando...</h2>) //este es un and logico
        }
        

        <div className='card-grid'>
            {
                images.map((image)=>(
                    <GifItem key={image.id}
                    {...image} //el spread es para tirar la 
                    ></GifItem>
                    // <li key={id}>{title}</li>
                ))
            }
        </div>
    </>
  )
}
