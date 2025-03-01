import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { MyContext } from '../utils/Context';

function Create() {

   
    const { register, handleSubmit, reset } = useForm();
    const [data, setData] = useContext(MyContext);

    const onSubmit = (product) => {
        const newProduct = { ...product, id: crypto.randomUUID() };
        setData((prev) => [...prev, newProduct]);
        reset();
        alert("Added Successfully")
    }
    
    return (
        <div className='w-130 flex flex-col  mx-auto mt-25'>

            <h1 className='text-2xl font-semibold mb-3'>Add New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                <input
                    {...register("image", { required: "image url required" })}
                    className='bg-zinc-100 h-8 w-full px-2 mb-3'
                    type="url"

                    placeholder='image link'

                />
                <input
                    {...register("title", { required: "title" })}
                    className='bg-zinc-100 h-8 w-full px-2 mb-3'
                    type="input"

                    placeholder='title'
                // value={image}
                />
                <div className='flex justify-between'>
                    <input
                        {...register("category", { required: "category" })}
                        className='bg-zinc-100 h-8 w-[48%] px-2 mb-3'
                        type="input"

                        placeholder='category'
                    // value={image}
                    />
                    <input
                        {...register("price", { required: "price" })}
                        className='bg-zinc-100 h-8 w-[48%] px-2 mb-3'
                        type="number"

                        placeholder='price'
                    // value={image}
                    />
                </div>
                <textarea className='bg-zinc-100 h-38 w-full px-2 mb-3'
                    {...register("description", { required: "description" })}
                    type="input"

                    placeholder='description'
                    // value={image}
                    rows="10"

                >
                </textarea>

                <button className='px-5 py-1 bg-blue-50 rounded-sm cursor-pointer' type='submit'>Submit</button>

            </form>


        </div>
    )
}

export default Create;