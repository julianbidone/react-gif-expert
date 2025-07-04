import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = ({ }) => {

    const [categories, setCategories] = useState(['Dragon Ball Z']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onAddCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}/>
                ))
            }
        </>
    )
}
