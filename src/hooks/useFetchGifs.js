import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages=async()=>{
        const newImages= await getGifs(category) ;
        setImages(newImages)
        setIsLoading(false);
        console.log(newImages)
    }

    useEffect(()=>{
        getImages();
        
    },[])//el use effect es para que no se repita y el [] es para q se ejecute una vez
  



  return{
    images: images,
    isLoading,
  }
}
