import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom"
import { MyContext } from '../utils/Context';

function Edit() {


    const { register, handleSubmit } = useForm();
    const { id } = useParams()
    const [data, setData] = useContext(MyContext);
    const navigate = useNavigate();

    const [editedProduct, setProductData] = useState(
        () => {
            return data.find(d => d.id == id) || {};
        }
    );

    const handleChange = (e) => {
        setProductData({ ...editedProduct, [e.target.name]: e.target.value })
    }

    const onSubmit = (product) => {

        const updateData = data.map((d) => (d.id == id ? editedProduct : d))
        setData(updateData);
        alert("Edit Successfully");
        navigate(-1);
    }
    





    return (
        <div className='w-130 flex flex-col  mx-auto mt-25'>

            <h1 className='text-2xl font-semibold mb-3'>Edit Your Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                <input
                    {...register("image", { required: "image url required" })}
                    className='bg-zinc-100 h-8 w-full px-2 mb-3'
                    type="url"
                    placeholder='image link'
                    value={editedProduct.image || ""}
                    onChange={handleChange}

                />

                <input
                    {...register("title", { required: "title" })}
                    className='bg-zinc-100 h-8 w-full px-2 mb-3'
                    type="input"
                    placeholder='title'
                    name='title'
                    value={editedProduct.title || ""}
                    onChange={handleChange}

                />
                <div className='flex justify-between'>
                    <input
                        {...register("category", { required: "category" })}
                        className='bg-zinc-100 h-8 w-[48%] px-2 mb-3'
                        type="input"
                        placeholder='category'
                        value={editedProduct.category || ""}
                        onChange={handleChange}
                    />
                    <input
                        {...register("price", { required: "price" })}
                        className='bg-zinc-100 h-8 w-[48%] px-2 mb-3'
                        type="number"
                        placeholder='price'
                        value={editedProduct.price || ""}
                        onChange={handleChange}
                    />
                </div>
                <textarea className='bg-zinc-100 h-38 w-full px-2 mb-3'
                    {...register("description", { required: "description" })}
                    type="input"
                    placeholder='description'
                    value={editedProduct.description || ""}
                    onChange={handleChange}

                    rows="10"


                >
                </textarea>

                <button className='px-5 py-1 bg-blue-50 rounded-sm cursor-pointer' type='submit'>Edit</button>

            </form>


        </div>
    )
}

export default Edit;