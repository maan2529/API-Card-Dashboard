import React, { useContext } from 'react';
import { NavLink, Link ,  useLocation } from 'react-router-dom'
import { MyContext } from '../utils/Context';

function Nav() {
  const [data] = useContext(MyContext);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()} , ${(Math.random() * 255).toFixed()} , 0.4 )`
  }

  let distinct_categoryy = data.reduce((acc, cv) => [...acc, cv.category], [])
    distinct_categoryy = [...new Set(distinct_categoryy)] // sme code maine Cards me bhi likha hai so uske kaise thik karna hai vo bad me dekh lena 



  return (
    <nav className='w-[18%] min-w-[170px] h-screen bg-zinc-100 flex flex-col fixed'>
      <div className='w-[65%] py-1 my-2 flex justify-center border border-blue-200 mx-auto cursor-pointer'>
        <Link to={'/create'} className='text-blue-200'>Add Products</Link>

      </div>
      <hr className='w-[80%] border-blue-200 mx-auto' />

      <div className='pl-4 text-semobold '>
        <h2 className='my-2'>Category Filter</h2>
        <div >
          {distinct_categoryy.map((d, idx) => <NavLink to={`/?category=${d}`} key={idx} className='w-full flex items-center  gap-2 mb-2'>
            <span style={{ backgroundColor: color() }} className='w-[10px] h-[10px] rounded-full bg-red-200 inline-block  '></span>
            <div className='text-sm capitalize ' >{d}</div>
          </NavLink>)}

        </div>
      </div>

    </nav>
  )
}

export default Nav;