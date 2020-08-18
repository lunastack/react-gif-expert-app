import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    console.log('Renderizando GifExpertApp');

    const [categories, setCategories] = useState(['Naruto']);
    

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories= { setCategories }  />
            <hr />
          
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            category={ category } 
                            key={ category }
                        />
                    )) 
                }
            </ol>
        </>
    );

};

export default GifExpertApp;