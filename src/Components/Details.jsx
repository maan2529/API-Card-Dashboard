import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../utils/Context';


function Details() {
    const { id } = useParams()
    const [data, setData] = useContext(MyContext);
    const navigate = useNavigate();


    const handleDeleteBtn = (id) => {
        const deletedData = data.filter((d) => d.id != id)
        setData(deletedData);
        navigate(-1);
    }


    return (
        <>
            {data.map((d, idx) => {
                return (d.id == id) ? (< div key={d.id} className='w-full h-screen  flex items-center justify-center overflow-hidden overflow-x-hidden overflow-y-hidden' >

                    <div className=' flex justify-center w-[60%] h-[50%] gap-12 '>
                        <div className='w-[30%]  mt-5 mb-2'>
                            <img className='w-full h-full object-center' src={d.image} alt="produnct pic" />
                        </div>
                        <div className='pt-12 w-[50%]'>
                            <h1 className='font-semibold pb-1'>{d.title}</h1>
                            <p className='text-zinc-400 pb-1 text-sm'>{d.category}</p>
                            <p className='text-red-300 pb-1'>{d.price}</p>
                            <p className='text-sm pb-1  h-25 overflow-y-hidden'>{d.description}</p>

                            <div className='flex gap-5 mt-5 '>
                                <Link to={`/edit/${id}`} className='px-3 py-1 text-green-200 border-green-200 w-fit border  rounded-sm cursor-pointer hover:shadow'>Edit</Link>
                                <Link onClick={() => handleDeleteBtn(id)} className='px-2 py-1  text-red-200 w-fit border  rounded-sm cursor-pointer border-red-200 hover:shadow'>Delete</Link>
                            </div>

                        </div>

                    </div>

                </div >) : null

            })}

        </>
    )
}

export default Details;