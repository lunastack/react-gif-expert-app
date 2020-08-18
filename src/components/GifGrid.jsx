import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    console.log('Renderizando GifGrid y voy a llamar a useFetch');
    const { data: images, loading } = useFetchGifs(category);
    console.log('Wa renderizar a GifGrid');
    

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            { loading && <p className="animate__animated animate__flash" >Loading</p> }
             
            <div className="card-grid">

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }    
            </div>
        </>

    );
}
