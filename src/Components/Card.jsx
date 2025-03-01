import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Details from './Details';

function Cards({data}) {

  
  return (
    <Link to={`/details/${data.id}`} className='card w-50 h-70  flex flex-col shadow items-center m-2 cursor-pointer'>
      <div className='w-[70%] h-[70%]  mt-5 mb-2'>
        <img className='w-full h-full object-center hover:scale-[1.1]' src={data.image} alt="produnct pic" />
      </div>
      <h1 className='hover:text-blue-300 px-4 text-sm overflow-hidden font-semibold'>{data.title}</h1>
    </Link>
  )
}

export default Cards;