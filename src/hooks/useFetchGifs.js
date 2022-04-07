import { useEffect, useState } from "react";
import { getGifs } from "../components/getGifs";

export const useFetchGifs = (categoria) => {

   const [gifs, setGifs] = useState({
      data: [],
      loading: true
   });

   useEffect(() => {
      setTimeout(() => {
         getGifs(categoria).then(imgs => setGifs({
            data: imgs,
            loading: false
         }));
      }, 2000)

   }, [categoria])

   return gifs
}