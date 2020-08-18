import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    console.log('Utilizando useFetch');


    const [state, setState] = useState({
        data: [],
        loading: true
    });

    console.log('estado: ', state);
    
    useEffect(() => {
        
        
        getGifs(category)
        .then(imgs => {
            
            setState({
                data: imgs,
                loading: false
            })
          /*   
            setTimeout(() => {
                
            }, 4000);
             */
            
        })
        
        
    }, [category]); // category es la dependecia, es decir, si cambia su valor, se ejecuta 
    console.log('wa retornar el estado: ', state);
    
    return state; // { data: [], loading: true }
};