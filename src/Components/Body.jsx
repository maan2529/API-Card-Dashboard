import React from 'react';
import Cards from './Cards'
import Nav from './Nav'
import { Link } from 'react-router-dom';

function Body() {
    
    return (
        <>
            <div className='flex w-full h-screen'>

                <Nav></Nav>
                
                <div className='mainContainer  basis-[82%] pt-12 h-screen p-2 pb-2 flex flex-wrap ml-[200px]'>
                
                    <Cards></Cards>
                </div>
            </div>

        </>

    )
}

export default Body;